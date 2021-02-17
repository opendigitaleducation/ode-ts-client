import { ACTION, GetContextParameters, GetContextResult, GetResourcesParameters, GetResourcesResult, RESOURCE } from "../../../src/interfaces";
import { AbstractBusAgent, IHandler } from "../../../src/foundation/Agent";

/**
 * Manage RESOURCE.FOLDER
 */
export class MockedFolderAgent extends AbstractBusAgent {
    constructor() {
        super( RESOURCE.FOLDER );
    }

    protected registerHandlers(): void {
        this.setHandler( ACTION.INITIALIZE,     this.onInitialize as unknown as IHandler );
        this.setHandler( ACTION.SEARCH,         this.onSearch as unknown as IHandler );
    }
    onInitialize( parameters:GetContextParameters ): Promise<GetContextResult> {
        return Promise.resolve().then( () => 
            require("../data/MockedContextData") as Promise<GetContextResult>
        );
    }
    onSearch( parameters:GetResourcesParameters ): Promise<GetResourcesResult> {
        throw new Error("Method not implemented.");
    }
}
