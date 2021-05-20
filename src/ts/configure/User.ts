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

    initialize() {
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

      // TODO Finir l'interface, voir infra-front/me.ts

}