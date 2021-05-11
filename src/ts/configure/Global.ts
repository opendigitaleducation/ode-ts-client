import { ConfigurationFrameworkFactory, IGlobal } from "./interfaces";
import { TransportFrameworkFactory } from "../transport/interfaces";
import { EVENT_NAME, LangChangedNotice, NotifyFrameworkFactory } from "../notify/interfaces";

const notify    = NotifyFrameworkFactory.instance;
const http      = TransportFrameworkFactory.instance.http;
const idiom     = ConfigurationFrameworkFactory.instance.idiom;

export class Global implements IGlobal {
    private _currentLanguage:string = '';
    private _notLoggedIn:boolean = true;

    get currentLanguage():string {
        return this._currentLanguage;
    }

    get notLoggedIn():boolean {
        return this._notLoggedIn;
    }

    public initialize( loggedIn:boolean ):void {
        this._notLoggedIn = !loggedIn;
        (loggedIn ? this.loadUserLanguage() : this.loadDefaultLanguage()).then( this.setCurrentLanguage );
    }

    private setCurrentLanguage( lang:string ) {
        const notice:LangChangedNotice = new LangChangedNotice( this._currentLanguage, lang );
        this._currentLanguage = lang;
        // Notify that current language has changed.
        notify.onEvent<LangChangedNotice>( EVENT_NAME.LANG_CHANGED ).next( notice );
    }

    private loadDefaultLanguage():Promise<string> {
        return http.get<void, string>( '/locale' ).then( responseText => {
            return JSON.parse(responseText).locale;
            /*TODO porter ce code à l'aide des notifications
            if((window as any).moment){
                if (currentLanguage === 'fr') {
                    moment.updateLocale(currentLanguage, {
                        calendar: {
                            lastDay: '[Hier à] HH[h]mm',
                            sameDay: '[Aujourd\'hui à] HH[h]mm',
                            nextDay: '[Demain à] HH[h]mm',
                            lastWeek: 'dddd [dernier à] HH[h]mm',
                            nextWeek: 'dddd [prochain à] HH[h]mm',
                            sameElse: 'dddd LL'
                        }
                    });
                }
                else {
                    moment.lang(currentLanguage);
                }
            }
            */
        }).catch( () => {
            // void
            return this._currentLanguage;
        });
    }

    private loadUserLanguage():Promise<string> {
        return http.get<void, string>( '/userbook/preference/language' ).then( responseText => {
            try {
                return JSON.parse(JSON.parse(responseText).preference)['default-domain'];
            } catch(e) {
                return this.loadDefaultLanguage();
            }
        }).catch( () => {
            return this.loadDefaultLanguage();
        });
    }    
}