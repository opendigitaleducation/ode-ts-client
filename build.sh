#!/bin/bash

if [ "$#" -gt 2 ]; then
  echo "Usage: $0 <clean|init|build|install|watch>"
  echo "Example: $0 clean"
  echo "Example: $0 init"
  echo "Example: $0 build"
  echo "Example: $0 install"
  echo "Example: $0 [--springboard=recette] watch"
  exit 1
fi

if [ ! -e node_modules ]
then
  mkdir node_modules
fi

if [ -z ${USER_UID:+x} ]
then
  export USER_UID=1000
  export GROUP_GID=1000
fi

# options
SPRINGBOARD="recette"
for i in "$@"
do
case $i in
    -s=*|--springboard=*)
    SPRINGBOARD="${i#*=}"
    shift
    ;;
    *)
    ;;
esac
done

clean () {
  rm -rf node_modules dist .gradle package.json package-lock.json deployment
}

init () {
  echo "[init] Get branch name from jenkins env..."
  BRANCH_NAME=`echo $GIT_BRANCH | sed -e "s|origin/||g"`
  if [ "$BRANCH_NAME" = "" ]; then
    echo "[init] Get branch name from git..."
    BRANCH_NAME=`git branch | sed -n -e "s/^\* \(.*\)/\1/p"`
  fi
  docker-compose run -e BRANCH_NAME=$BRANCH_NAME --rm -u "$USER_UID:$GROUP_GID" gradle sh -c "gradle generateTemplate"
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm install --production=false"
}

build () {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm run test && npm run docs && npm run build"
  VERSION=`grep "version="  gradle.properties| sed 's/version=//g'`
  echo "ode-ts-client=$VERSION `date +'%d/%m/%Y %H:%M:%S'`" >> dist/version.txt
}

watch () {
  docker-compose run \
    --rm \
    -u "$USER_UID:$GROUP_GID" \
    -v $PWD/../$SPRINGBOARD:/home/node/springboard \
    node sh -c "npm run watch --watch_springboard=/home/node/springboard"
}

publishNPM () {
  LOCAL_BRANCH=`echo $GIT_BRANCH | sed -e "s|origin/||g"`
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" node sh -c "npm publish --tag $LOCAL_BRANCH"
}

packageJar () {
  rm -rf ode-ts-client.tar.gz ode-ts-client
  mkdir ode-ts-client && mv dist/version.txt ode-ts-client && cp dist/bundle ode-ts-client/assets
  tar cfzh ode-ts-client.tar.gz ode-ts-client
}

publishCmd(){
  local deploymentString=$1
  echo "Publish command is: $ $deploymentString"
  docker-compose run \
    --rm \
    --no-deps \
    -u "$USER_UID:$GROUP_GID" \
    -w /usr/src \
    -e MAVEN_CONFIG=/var/maven/.m2 \
    maven sh -c "$deploymentString"
}

publishNexus () {
  VERSION=`grep "version="  gradle.properties| sed 's/version=//g'`
  case "$VERSION" in
    *SNAPSHOT) nexusRepository='snapshots' ;;
    *)         nexusRepository='releases' ;;
  esac
  publishCmd "mvn deploy:deploy-file -DgroupId=com.opendigitaleducation -DartifactId=ode-ts-client -Dversion=$VERSION -Dpackaging=tar.gz -Dfile=ode-ts-client.tar.gz -Duser.home=/var/maven -DrepositoryId=wse -Durl=https://maven.opendigitaleducation.com/nexus/content/repositories/$nexusRepository/"
}

publishMavenLocal(){
  VERSION=`grep "version="  gradle.properties| sed 's/version=//g'`
  publishCmd "mvn install:install-file -DgroupId=com.opendigitaleducation -DartifactId=ode-ts-client -Dversion=$VERSION -Dpackaging=tar.gz -Dfile=ode-ts-client.tar.gz -Duser.home=/var/maven"
  rm -rf ode-ts-client ode-ts-client.tar.gz
}

for param in "$@"
do
  case $param in
    clean)
      clean
      ;;
    init)
      init
      ;;
    build)
      build
      ;;
    install)
      build && packageJar && publishMavenLocal
      ;;
    watch)
      watch
      ;;
    publishNPM)
      publishNPM
      ;;
    publishNexus)
      packageJar && publishNexus
      ;;
    *)
      echo "Invalid argument : $action"
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done