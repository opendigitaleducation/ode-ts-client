import { ActionType, IBusAgent, RESOURCE, ResourceType } from "../interfaces";
import { FolderAgent } from "../agents/FolderAgent";
import { BlogAgent } from "../agents/BlogAgent";

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

export class AgentFactory {
    static requestAgentFor(res:ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        // TODO full apps support, depending on which apps Me can access.
        //FIXME rendre ce mapping paramétrable, afin de faciliter l'ajout de nouvelles applis / migrer les anciennes.

        switch( res ) {
            case RESOURCE.FOLDER :
                return new FolderAgent().initialize(res, action);
            case RESOURCE.BLOG :
                return new BlogAgent().initialize(res, action);
            default:
                throw new Error(`The action ${action} is not supported yet on resource ${res}.`);
        }
    }
}

