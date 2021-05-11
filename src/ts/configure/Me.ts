import { ConfigurationFrameworkFactory, IMe, IUserInfo } from "./interfaces";
import { TransportFrameworkFactory } from "../transport/interfaces";
import { EVENT_NAME, BootstrappedNotice, PreferencesUpdated, NotifyFrameworkFactory } from "../notify/interfaces";

const notify    = NotifyFrameworkFactory.instance;

const http = TransportFrameworkFactory.instance.http;
const idiom = ConfigurationFrameworkFactory.instance.idiom;

class UserPreferences {
    [pref:string]: any;
    
    save( pref:string, data:any ):void {
        if(data !== undefined){
            this[pref] = data;
        }
        notify.onEvent<PreferencesUpdated>( EVENT_NAME.PREFERENCES_UPDATED ).next( new PreferencesUpdated(this) );
    }
}

/* TODO IResourceRight model */
type IResourceRight = any;

export class Me implements IMe {
    private _me:IUserInfo = null as unknown as IUserInfo;
    private _keepOpenOnLogout:boolean = false;

    get session():IUserInfo {
        return this._me;
    }
    get keepOpenOnLogout():boolean {
        return this._keepOpenOnLogout;
    }

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

    private setCurrentModel( me:any ) {
        this._me = me;
        this._me.preferences = new UserPreferences();

        /* TODO portage du code
		model.me.workflow = {
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
			await model.me.workflow.load(['workspace', appPrefix]);
		}
		else{
			await model.me.workflow.load(['workspace']);
		}
		
		model.trigger('me.change');
        */

        // Notify that current model has changed.
        notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).next( new BootstrappedNotice(me) );
    }

    private loadPublicConf():Promise<any> {
        return http.get<void, string>( '/conf/public' ).then( responseText => {
            const publicConf = JSON.parse(responseText);
            this._keepOpenOnLogout = publicConf?.keepOpenOnLogout || false;
            return publicConf;
		});
    }

    public bootstrap() {
        Promise.all<string,any>([
            http.get<void, string>( '/auth/oauth2/userinfo' ),
            this.loadPublicConf()
        ])
        .then( results => {
            this.setCurrentModel( JSON.parse(results[0]) );
        })
        .catch( (e:Error) => {
            notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).next( new BootstrappedNotice(null, e.message) );
        });
    }

    
}