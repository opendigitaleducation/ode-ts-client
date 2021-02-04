import { App, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "../interfaces";

class ExplorerFramework implements IExplorerFramework {

    /** The whole framework is a singleton. */
    private static singleton: ExplorerFramework;
    static get instance(): ExplorerFramework {
        return ExplorerFramework.singleton || (ExplorerFramework.singleton = new ExplorerFramework());
    }

    createContext(types: ResourceType[], app?: App): IExplorerContext {
        throw new Error("Method not implemented.");
    }
    getBus(): IBus {
        throw new Error("Method not implemented.");
    }
}
