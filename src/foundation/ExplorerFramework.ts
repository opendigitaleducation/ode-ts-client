import { App, ExplorerFrameworkFactory, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "../interfaces";
import { ExplorerContext } from "./ExplorerContext";

export class ExplorerFramework implements IExplorerFramework {

    createContext(types: ResourceType[], app?: App): IExplorerContext {
        return new ExplorerContext( types, app );
    }
    getBus(): IBus {
        throw new Error("Method not implemented.");
    }
}

/** The whole framework is a singleton. */
ExplorerFrameworkFactory.instance = new ExplorerFramework();

export let framework:IExplorerFramework = ExplorerFrameworkFactory.instance;
