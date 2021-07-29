import { transport } from "../transport/Framework";
import { notify } from "../notify/Framework";
import { ISession, IUserDescription, IUserInfo } from "./interfaces";

const http = transport.http;

/* TODO IResourceRight model */
type IResourceRight = any;
type PersonApiResult = {status:"ok"|string, result:Array<IUserDescription>};

export class Session implements ISession {
    private _me:IUserInfo = null as unknown as IUserInfo;

    private _currentLanguage:string = '';
    private _notLoggedIn:boolean = true;
	private _description?:IUserDescription;


    get currentLanguage():string {
        return this._currentLanguage;
    }

    get notLoggedIn():boolean {
        return this._notLoggedIn;
    }

	get description():IUserDescription {
		// will be undefined if initialize() was not called.
		return this._description as unknown as IUserDescription;
	}

    get user():IUserInfo {
        return this._me;
    }

    public initialize():Promise<void> {
        return http.get<IUserInfo>( '/auth/oauth2/userinfo' )
        .then( u => { 
            this.setCurrentModel( u );
            return this._notLoggedIn ? this.loadDefaultLanguage() : this.loadUserLanguage();
        })
        .then( lang => {
            this.setCurrentLanguage( lang );
            return this.loadDescription();
        }).then( ()=>{
            notify.onSessionReady().resolve( this._me );
        })
        .catch( (e:Error) => {
            // Note : do not log error in the browser console here, since this code may run outside a browser !
            notify.onSessionReady().reject( e );
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
        return workflowName === undefined || this._me?.authorizedActions.findIndex( workflowRight => {
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
        this._currentLanguage = lang;
        // Notify that current language has changed.
        notify.onLangReady().resolve( lang );
    }

    private loadDefaultLanguage():Promise<string> {
        return http.get<string>( '/locale' ).then( responseText => {
            return JSON.parse(responseText).locale;
        }).catch( () => {
            // void
            return this._currentLanguage;
        });
    }

    private loadUserLanguage():Promise<string> {
        return http.get<any>( '/userbook/preference/language' ).then( responseText => {
            try {
                return JSON.parse(responseText.preference)['default-domain'];
            } catch(e) {
                return this.loadDefaultLanguage();
            }
        }).catch( () => {
            return this.loadDefaultLanguage();
        });
    }

    ////////////////////////////////////////////////////////// Description management

	private loadDescription():Promise<IUserDescription> {
		return Promise.all([
			http.get<PersonApiResult>('/userbook/api/person', {requestName: "refreshAvatar"}),
			http.get<IUserDescription>('/directory/userbook/'+ this._me.userId)
		]).then( result => {
            if( result[0].status ==="ok" && result[0].result && result[0].result.length>0 ) {
                this._description = result[0].result[0];
            } else {
                this._description = {} as unknown as IUserDescription;
            }
            // "type" field from /userbook/api/person becomes "profiles"
            if( this._description.type && !this._description.profiles ) {
                this._description.profiles = this._description.type as unknown as Array<string>;
            }
			Object.assign( this._description, result[1]);
			return this._description;
		});
	}
}