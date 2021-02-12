import { Observable } from "rxjs";
import { ACTION, ActionType, ERROR_CODE, ExplorerFrameworkFactory, GetContextResult, IActionResult, IBusAgent, IContext, IFolder, RESOURCE, ResourceType } from "../interfaces";

/**
 * Inner representation of an agent, from the bus' perspective.
 */
export interface IAbstractBusAgent extends IBusAgent {
    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent>;
}

/**
 * Manage RESOURCE.FORLDER
 */
export class FolderAgent implements IAbstractBusAgent {
    private initialized: boolean = false;
    private handlerFor: {[action in ActionType]:boolean} = {
        comment: false,
        copy: false,
        create: false,
        delete: false,
        export: false,
        initialize: true,
        manage: false,
        move: false,
        open: false,
        print: false,
        publish: false,
        search: true,
        share: false
    };

    private canHandle(res: ResourceType, action: ActionType): boolean {
        return RESOURCE.FOLDER===res && true===this.handlerFor[action] ;
    }

    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        return Promise.resolve()
        .then( () => {
            //TODO requête vers les Behaviours.
            return {};
        })
        .catch( reason => {
            throw new Error(`Unable to request the behaviours of FolderAgent, reason: ${reason}`);
        })
        .then( behaviours => {
            // TODO gérer les behaviours.
            ExplorerFrameworkFactory.instance.getBus().consumer( RESOURCE.FOLDER, ACTION.INITIALIZE, this );
            ExplorerFrameworkFactory.instance.getBus().consumer( RESOURCE.FOLDER, ACTION.SEARCH, this );
            
            this.initialized = true;

            if( this.canHandle(res,action) ) {
                return this;
            } else {
                throw new Error(`FolderAgent cannot handle action ${action}`);
            }
        });
    }

    activate(res: ResourceType, action: ActionType, parameters: any): Promise<IActionResult> {
        if( this.initialized && this.canHandle(res,action) ) {
            return new Observable<IActionResult>( observer => {
                // TODO Envoyer parameters à la behaviour, récupérer le résultat.
                let data = {}

                observer.next( data );
            }).toPromise();
        }
        throw new Error(ERROR_CODE.NOT_SUPPORTED);
    }
}

export class AgentFactory {
    static requestAgentFor(res:ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        // TODO full apps support, depending on which apps Me can access.
        //FIXME rendre ce mapping paramétrable, afin de faciliter l'ajout de nouvelles applis / migrer les anciennes.

        switch( res ) {
            case RESOURCE.FOLDER :
                return new FolderAgent().initialize(res, action);
            default:
                throw new Error(`The action ${action} is not supported yet on resource ${res}.`);
        }
    }
}

