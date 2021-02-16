import { App, ExplorerFrameworkFactory, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "../interfaces";
import { BusFactory } from "./Bus";
import { ExplorerContext } from "./ExplorerContext";

export class ExplorerFramework implements IExplorerFramework {

    agentLoader: AgentLoader = new AgentLoader();

    createContext(types: ResourceType[], app?: App): IExplorerContext {
        return new ExplorerContext( types, app );
    }
    getBus(): IBus {
        return BusFactory.instance;
    }
}

/** The whole framework is a singleton. */
export let framework:IExplorerFramework = ExplorerFrameworkFactory.instance = new ExplorerFramework();
