import { ActionType, App, IBus, IBusAgent } from "../interfaces";

class Bus implements IBus {
    
    register(app: App, actions: ActionType[], agent: IBusAgent): void {
        throw new Error("Method not implemented.");
    }
    delegate(app: App, action: ActionType, parameters: any) {
        throw new Error("Method not implemented.");
    }
}
