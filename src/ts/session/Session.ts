import { BootstrappedNotice, EVENT_NAME, LangChangedNotice } from "../notify/interfaces";
import { transport } from "../transport/Framework";
import { notify } from "../notify/Framework";
import { ISession, IUserInfo } from "./interfaces";

const http = transport.http;

/* TODO IResourceRight model */
type IResourceRight = any;

export class Session implements ISession {
    private _me:IUserInfo = null as unknown as IUserInfo;

    private _currentLanguage:string = '';
    private _notLoggedIn:boolean = true;

    get currentLanguage():string {
        return this._currentLanguage;
    }

    get notLoggedIn():boolean {
        return this._notLoggedIn;
    }

    public initialize():void {
        http.get<void, IUserInfo>( '/auth/oauth2/userinfo' )
        .then( u => { 
            this.setCurrentModel( u );
            return this._notLoggedIn ? this.loadDefaultLanguage() : this.loadUserLanguage();
        })
        .then( lang => {
            this.setCurrentLanguage( lang );
            notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).next( new BootstrappedNotice(this._me) );
        })
        .catch( (e:Error) => {
            // Note : do not log error in the browser console here, since this code may run outside a browser !
            // TODO Subscribe to this notice in ode-ngjs-front.
            notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).next( new BootstrappedNotice(undefined, e.message) );
        });
    }

    private setCurrentModel( me:IUserInfo ) {
        this._me = me;
        this._notLoggedIn = (me && me.sessionMetadata && me.sessionMetadata.userId) ? false : true;
/*
		me.workflow = {
			load: async function(services): Promise<void>{
				for(let service of services){
					try{
						let workflows = await Behaviours.findWorkflow(service);
						console.log('Workflows loaded from ' + service);
						console.log(workflows);
						this[service] = workflows;
					}
					catch(e){
						console.log(service + " doesn't have a behaviours file.");
					}
				}
			}
		};

		if(appPrefix !== '.'){
			await me.workflow.load(['workspace', appPrefix]);
		}
		else{
			await me.workflow.load(['workspace']);
		}
		
		model.trigger('me.change');
*/
    }

    ////////////////////////////////////////////////////////// Rights management

    hasWorkflow( workflowName:string ):boolean {
        return workflowName === undefined || this._me.authorizedActions.findIndex( workflowRight => {
            return workflowRight.name === workflowName;
        }) !== -1;
    }

    hasRight(resource:any, right:any):boolean {
        if(right === 'owner'){
            return resource.owner && resource.owner.userId === this._me.userId;
        }
        const rightName = right.right || right;

        let currentSharedRights:Array<IResourceRight> = (resource.shared as Array<IResourceRight>).filter( sharedRight => {
            return (this._me.groupsIds || []).indexOf(sharedRight.groupId) !== -1
                || sharedRight.userId === this._me.userId;
        });

        const resourceRight:boolean = currentSharedRights.find( resourceRight => {
            return resourceRight[rightName] || resourceRight.manager;
        }) !== undefined;

        const workflowRight = (right.workflow) ? this.hasWorkflow(right.workflow) : true;

        return resourceRight && workflowRight;
    }

    ////////////////////////////////////////////////////////// Language management

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
        return http.get<void, any>( '/userbook/preference/language' ).then( responseText => {
            try {
                return JSON.parse(responseText.preference)['default-domain'];
            } catch(e) {
                return this.loadDefaultLanguage();
            }
        }).catch( () => {
            return this.loadDefaultLanguage();
        });
    }
}