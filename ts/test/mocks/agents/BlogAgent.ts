import { Observable } from "rxjs";
import { IAbstractBusAgent } from "../../../src/foundation/Agent";
import { ACTION, ActionType, ERROR_CODE, ExplorerFrameworkFactory, IActionResult, RESOURCE, ResourceType } from "../../../src/interfaces";
import { IBehaviours } from "../../../src/legacy/Behaviours";
import { BehaviourBasedAbstractBusAgent as BehaviourBasedAbstractBusAgent } from "./BehaviourBasedAbstractBusAgent";

declare var Behaviours:IBehaviours;

/**
 * Manage RESOURCE.BLOG
 */
export class BlogAgent extends BehaviourBasedAbstractBusAgent {
    constructor() {
        super( RESOURCE.BLOG );
    }

    protected registerHandlers(): void {
        // TODO checker les droits et affecter un handler à toutes les actions supportées.
        // Behaviours.applicationsBehaviours[serviceName]....
        this.setHandler( ACTION.OPEN );
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
