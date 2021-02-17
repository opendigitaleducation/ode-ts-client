import { IAbstractBusAgent, RESOURCE, ResourceType } from "../../../src";
import { IAgentLoader } from "../../../src/foundation/AgentLoader";
import { FolderAgent } from "./FolderAgent";

/**
 * Default implementation of the loader.
 */
export class MockedAgentLoader implements IAgentLoader {
    load(res: ResourceType): Promise<IAbstractBusAgent> {
        switch( res ) {
            case RESOURCE.FOLDER : 
                return Promise.resolve().then( ()=> new FolderAgent() );
            default:
                throw new Error(`A mocked "${res}" agent cannot be found.`);
        }

    }
    
}