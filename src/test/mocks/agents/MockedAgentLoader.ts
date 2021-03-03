import { IAbstractBusAgent, RESOURCE, ResourceType } from "../../../ts";
import { IAgentLoader } from "../../../ts/foundation/AgentLoader";
import { MockedFolderAgent } from "./MockedFolderAgent";

/**
 * Default implementation of the loader.
 */
export class MockedAgentLoader implements IAgentLoader {
    load(res: ResourceType): Promise<IAbstractBusAgent> {
        switch( res ) {
            case RESOURCE.FOLDER : 
                return Promise.resolve().then( ()=> new MockedFolderAgent() );
            default:
                throw new Error(`A mocked "${res}" agent cannot be found.`);
        }

    }
    
}