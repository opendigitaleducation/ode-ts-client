import { App, ExplorerFactory, IBus, IExplorerContext, IExplorerFramework, ResourceType } from "../interfaces";
import { ExplorerContext } from "./ExplorerContext";

export class ExplorerFramework implements IExplorerFramework {

    /** The whole framework is a singleton. */
    private static singleton: ExplorerFramework;
    static get instance(): IExplorerFramework {
        return ExplorerFramework.singleton || (ExplorerFramework.singleton = new ExplorerFramework());
    }

    createContext(types: ResourceType[], app?: App): IExplorerContext {
        return new ExplorerContext( types, app );
    }
    getBus(): IBus {
        throw new Error("Method not implemented.");
    }
}

class InnerExplorerFactory extends ExplorerFactory {
    static instance = ExplorerFramework.instance;
}
