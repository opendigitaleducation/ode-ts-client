# ode-ts-client

Open Digital Education (ODE) client frameworks definition and implementation.

/!\ THIS IS WORK IN PROGRESS, AND STILL UNDER HEAVY DEVELOPMENT.
PLEASE DO NOT USE UNTIL IT REACHES 1.0.

***

This client-side library exposes frameworks for interacting with [entcore-based servers APIs](https://github.com/opendigitaleducation/entcore).
It is written in typescript, with minimal dependencies (rxjs and axios at the moment).

As rule of thumb, **ode-ts-client never uses any browser-related technology** (no HTMLElement, Document, navigator...). 
It focus exclusively on data exchange with the servers.

* __IConfigurationFramework__ is composed of 3 layers
  * Platform (apps, theme, analytics, i18n...)
  * School
  * User (preferences)

* __ISession__ of the connected user
  * user
  * description
  * currentLanguage
  * notLoggedIn
  * avatarUrl
  * currentApp (the one which initialized the framework)
  * hasWorkflow
  * hasRight

* __INotifyFramework__ for async messages
  * onLangReady
  * onSessionReady
  * onSkinReady
  * onOverridesReady
  * promisify (generic for creating/resolving/rejecting a Promise)
  * events (a publish/subscribe event broker)

* __ITransportFramework__ wraps the HTTP protocol

* __IExplorerFramework__ to look for resources

* __IWidgetFramework__ dedicated to widgets conf/prefs

* and specific app frameworks for modeling their data
  * __ITimelineApp__
  * ...

## Documentation

[Browse the full API documentation here](docs/modules.md)

## Quickstart for developers

```
git clone ode-ts-client
./build.sh clean init
```
...code...

```
./build.sh build
```
or
```
./build.sh -s=your_local_springboard watch
```

## Usage of the IExplorerFramework

Example for the Blog application :

```typescript
import { ExplorerFrameworkFactory, IExplorerContext, APP, RESOURCE, ISearchParameters, IContext, GetResourcesResult } from "ode-ts-client";
/* ... */
const explorer:IExplorerContext = ExplorerFrameworkFactory.instance().createContext( [RESOURCE.BLOG], APP.BLOG );
const searchParams:ISearchParameters = explorer.searchParameters;
/*... tweak searchParams if needed...*/
const context:IContext = await explorer.initialize();

/* Now, access the context. It contains the first results page, and all available filters, preferences... */

/*... tweak searchParams if needed (paging)...*/
explorer.getResources().then( (result:GetResourcesResult) => {
    /* Use result */
});
```

It is also possible to observe (RxJS) the resultsets asynchronously, as they are generated :
```typescript
import { Subscription } from "rxjs";
/* ... */
let subscription:Subscription = explorer.latestResources().subscribe({
    next: result => { 
        /* Now, access the result.output */;
    }
});
/* ...elsewhere...*/
if( subscription ) {
    subscription.unsubscribe();
}
```
## Additional developers notes

4 additional libs are installed by the ```./build.sh init``` command.
* [Webpack 5](https://webpack.js.org/concepts/) and associated tools to generate JS bundles.
* [jasmine](https://jasmine.github.io/api/3.6/) for unit-testing.
* [Typedoc](https://typedoc.org/guides/doccomments/) to generate the markdown documentation, in **/docs**, from the Typescript comments in source code.
* [husky](https://github.com/typicode/husky) to install a local [git pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_client_side_hooks), in order to run the unit-tests and update /docs before every commit.
  => **/docs will always be up-to-date on the git server**.

The ```./build.sh build``` command will populate the **/dist** directory
* **/dist/ts** contains the JS code and associated _.d.ts_ and _.js.map_ files, later packaged in NPM (done by our CI).
* **/dist/bundle** contains the production-ready code/map.

So, **you'll just have to write nice documented code, and unit tests** where needed !
