import { ACTION, ActionType, APP, App, IActionResult, IBus, IBusAgent } from "../interfaces";
import { IAbstractBusAgent } from './Agent';

type AgentForActions = {[B in ActionType]: IAbstractBusAgent|null};

class Bus implements IBus {
    private delegatedAgentMap: {[A in App]?: AgentForActions} = {};
    
    register( app:App, actions:ActionType[], agent:IBusAgent ): void {
        throw new Error("Method not implemented.");
    }
    delegate( app:App, action:ActionType, parameters:any ): Promise<IActionResult> {
        let agent = this.lookupDelegateFor( app, action );
        agent.activate( app, action, parameters )
        throw new Error("Method not implemented.");
    }

    /**
     * Lookup the dedicated agent for resolving an action on a resource-productive app.
     * @param app {App} The targeted resource-productive app
     * @param action {ActionType} The type of action that the agent must support.
     */
    private lookupDelegateFor(app: App, action: ActionType): IAbstractBusAgent {
        // Lookup the agentForActions for this app.
        let agentForActions = this.delegatedAgentMap[app];
        if( typeof agentForActions==="undefined" ) {
            // It's the first time an action is requested on this app, so init the map.
            agentForActions = {} as AgentForActions;
            for( let b of Object.values(ACTION) ) {
                agentForActions[b] = null;
            }
            this.delegatedAgentMap[app] = agentForActions;
        }
        // Lookup the agent for this action.
        let agent = agentForActions[action];
        if( typeof agent==="undefined" ) {
            // No agent defined yet, so create one.
            agentForActions[action] = agent = AgentActionMapper.generateAgent( app, action );
        }
        if( agent === null ) {
            throw new Error("Agent is null");
        }
        return agent;
    }
}

export class BusFactory {
    private static _instance: IBus;
    static get instance(): IBus {
        return (this._instance = this._instance || new Bus());
    }
}


class AgentActionMapper {
    static generateAgent(app: App, action: ActionType): IAbstractBusAgent {
        // TODO full apps support, depending on which apps Me can access.
        //FIXME rendre ce mapping paramétrable, afin de faciliter l'ajout de nouvelles applis / migrer les anciennes.

        switch( app ) {
            case APP.EXPLORER :
                
        }
    }
}
