import { Observable } from "rxjs";
import { ActionType, ERROR_CODE, IActionResult, ResourceType } from "../../../src/interfaces";
import { IAbstractBusAgent, AbstractBusAgent } from "../../../src/foundation/Agent";
import { IBehaviours } from "../../../src/legacy/Behaviours";

declare var Behaviours:IBehaviours;

/**
 * Manage a generic RESOURCE
 */
export abstract class BehaviourBasedAbstractBusAgent extends AbstractBusAgent {
    constructor( managedResource:ResourceType ) {
        super(managedResource);
    }
    /**
     * Get the "serviceName" associated with the managedResource, from the Behaviours' perspective.
     * Can be overriden if needed.
     */
    protected get serviceName(): string {
        return this.managedResource;
    }

    initialize(res: ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        return Behaviours.load(this.serviceName)
        .catch(reason => {
            throw new Error(`Unable to request the behaviours for ${this.serviceName}, reason: ${reason}`);
        })
        .then( behaviour => super.initialize(res, action) );
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
