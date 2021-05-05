import { ExplorerFramework } from "../configuration/ConfigurationFramework";
import { IConfigurationFramework } from "../configuration/interfaces";
import { App, ERROR_CODE } from "../globals";
import { IAbstractBusAgent } from "./Agent";
import { AgentLoader, IAgentLoader } from "./AgentLoader";
import { BusFactory } from "./Bus";
import { ExplorerContext } from "./ExplorerContext";
import { ActionType, ExplorerFrameworkFactory, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "./interfaces";

export class ConfigurationFramework implements IConfigurationFramework {
    private agentLoader:AgentLoader = new AgentLoader();

    /* This is useful for mocking data. */
    setAgentLoader( loader:IAgentLoader ): void {
        if( loader ) {
            this.agentLoader = loader;
        }
    }

    requestAgentFor(res:ResourceType, action: ActionType): Promise<IAbstractBusAgent> {
        // TODO Check which apps Me can access.
        return this.agentLoader.load( res ).then( () => {
            // The agent should be registered on the bus, by itself or by the (mocked) loader. It must be available here.
            let agent = this.getBus().getAgentFor(res, action) as IAbstractBusAgent;
            if( !agent ) {
                throw new Error(ERROR_CODE.AGENT_NOT_FOUND);
            }
            return agent.initialize(res,action);
        });
    }

    createContext(types: ResourceType[], app: App): IExplorerContext {
        return new ExplorerContext( types, app );
    }
    
    getBus(): IBus {
        return BusFactory.instance;
    }
}

/** The whole framework is a singleton. */
export let explorer:IExplorerFramework = ExplorerFrameworkFactory.instance = new ExplorerFramework();
