import { IUserPreferences } from "./interfaces";
import { EVENT_NAME, BootstrappedNotice, PreferencesUpdated } from "../notify/interfaces";
import { transport } from "../transport/Framework";
import { notify } from "../notify/Framework";
import { IUserInfo } from "../session/interfaces";

const http = transport.http;

//-------------------------------------
class UserPreferences implements IUserPreferences {
//-------------------------------------
    [key:string]: any;
    
    update( key:string, data:any ):UserPreferences {
        if(data !== undefined){
            this[key] = data;
        }
        notify.onEvent<PreferencesUpdated>( EVENT_NAME.PREFERENCES_UPDATED ).next( new PreferencesUpdated(key, data) );
        return this;
    }

    save( key:string ):Promise<void> {
        //FIXME code review
        return http.put('/userbook/preference/' + key, this[key]);
    }
}

//-------------------------------------
export class User {
//-------------------------------------
    private _keepOpenOnLogout:boolean = false;
    private _preferences:IUserPreferences = new UserPreferences();

    get keepOpenOnLogout():boolean {
        return this._keepOpenOnLogout;
    }

    get preferences():IUserPreferences {
        return this._preferences;
    }

    initialize( version?:string ) {
        this.loadPublicConf();
        const sessionSubscription = notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).subscribe(
            notice => {
                sessionSubscription?.unsubscribe();
                if(notice.userInfo) {
                    this.setCurrentModel(notice.userInfo);
                }
            }
        );
    }

    private setCurrentModel( me:IUserInfo ) {
        this._preferences = new UserPreferences();
    }

    private loadPublicConf():Promise<any> {
        return http.get<void, any>( '/conf/public' ).then( publicConf => {
            this._keepOpenOnLogout = publicConf?.keepOpenOnLogout || false;
            return publicConf;
		});
    }

    //TODO : bookmarks (raccourcis mes applis)
    /*
    loadBookmarks: async function(){
        return new Promise<void>((resolve, reject) => {
          http().get('/userbook/preference/apps').done(function(data){
            if(!data.preference){
              data.preference = null;
            }
            model.me.myApps = JSON.parse(data.preference);
            if (_.isArray(model.me.myApps)) {
              model.me.bookmarkedApps = model.me.myApps;
              model.me.myApps = {
                bookmarks: _.map(model.me.myApps, app => app.name),
                applications: []
              }
              http().putJson('/userbook/preference/apps', model.me.myApps);
              resolve();
              return;
            }
            if (!model.me.myApps){
              model.me.myApps = {
                bookmarks: [],
                applications: []
              }
            }
            model.me.bookmarkedApps = [];
            var upToDate = true;
            let remove = [];
            model.me.myApps.bookmarks.forEach(function(appName, index){
              var foundApp = _.findWhere(model.me.apps, { name: appName });
              if(foundApp){
                var app = {};
                for(var property in foundApp){
                  app[property] = foundApp[property];
                }
                model.me.bookmarkedApps.push(app);
              }
              else{
                remove.push(appName);
                upToDate = false;
              }
            });
            remove.forEach(function(app) {
              var index = model.me.myApps.bookmarks.indexOf(app);
              model.me.myApps.bookmarks.splice(index, 1);
            });
            if(!upToDate){
              http().putJson('/userbook/preference/apps', model.me.myApps);
            }
            resolve();
          });
        });
    */

      // TODO Finir l'interface, voir infra-front/me.ts

}