import { ACTION, ActionType, ERROR_CODE, ExplorerFrameworkFactory, IActionResult, IBusAgent, ResourceType } from "../interfaces";
import { Observable } from "rxjs";

/**
 * Inner representation of an agent, from the bus' perspective.
 */
export interface IAbstractBusAgent extends IBusAgent {
    /**
     * 
     * @param res 
     * @param action 
     */
    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent>;
}

/**
 * Manage a generic RESOURCE
 */
export abstract class AbstractBusAgent implements IAbstractBusAgent {
    constructor( managedResource:ResourceType ) {
        this.managedResource = managedResource;
    }
    /** Type of resource this agent can manage. */
    protected managedResource: ResourceType;
    protected initialized: boolean = false;
    protected handlerFor: {
        [action in ActionType]: boolean;
    } = {
            comment: false,
            copy: false,
            create: false,
            delete: false,
            export: false,
            initialize: false,
            manage: false,
            move: false,
            open: false,
            print: false,
            publish: false,
            search: false,
            share: false
        };

    protected resetHandlers(): void {
        for( let action in Object.values(ACTION) ) {
            this.handlerFor[action as ActionType] = false;
        }
    }
    protected setHandler( action:ActionType ): void {
        ExplorerFrameworkFactory.instance.getBus().consumer(this.managedResource, action, this);
        this.handlerFor[action] = true;
    }
    protected canHandle( res:ResourceType, action:ActionType): boolean {
        return this.managedResource===res && true===this.handlerFor[action];
    }

    /** Override to register handlers for actions this agent support. */
    protected abstract registerHandlers(): void;

    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        this.resetHandlers();
        return Promise.resolve()
        .then( () => {
            this.registerHandlers();
            this.initialized = true;
            if (this.canHandle(res, action)) {
                return this;
            } else {
                throw new Error(`Agent for "${this.managedResource}" is unable to handle "${action}" actions.`);
            }
        });
    }

    activate(res: ResourceType, action: ActionType, parameters: any): Promise<IActionResult> {
        if (this.initialized && this.canHandle(res, action)) {
            return new Observable<IActionResult>(observer => {
                // TODO Envoyer parameters à la behaviour, récupérer le résultat.
                let data = {};

                observer.next(data);
            }).toPromise();
        }
        throw new Error(ERROR_CODE.NOT_SUPPORTED);
    }
}
