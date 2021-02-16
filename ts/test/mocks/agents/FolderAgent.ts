import { Observable } from "rxjs";
import { ACTION, ActionType, ERROR_CODE, IActionResult, RESOURCE, ResourceType } from "../../../src/interfaces";
import { AbstractBusAgent } from "../../../src/foundation/Agent";

/**
 * Manage RESOURCE.FOLDER
 */
export class FolderAgent extends AbstractBusAgent {
    constructor() {
        super( RESOURCE.FOLDER );
    }

    protected registerHandlers(): void {
        this.setHandler( ACTION.INITIALIZE );
        this.setHandler( ACTION.SEARCH );
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
