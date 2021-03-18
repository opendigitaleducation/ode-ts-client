import { appNameForResource, ResourceType } from "../interfaces";
import { IAbstractBusAgent } from "./Agent";

/**
 * Inner representation of an agent loader, from the bus' perspective.
 */
export interface IAgentLoader {
    load(res: ResourceType): Promise<IAbstractBusAgent>;
}

/**
 * Default implementation of the loader.
 */
 export class AgentLoader implements IAgentLoader {
    load(res: ResourceType): Promise<IAbstractBusAgent> {
        let appName = appNameForResource[res];
        if( typeof appName!=="string" ) {
            throw new Error(`The resource type ${res} is not supported yet.`);
        }
        return new Promise((resolve, reject) => {
            let loader = require("little-loader");
            loader( `${appName}/public/js/explorer.agent.js`, (ctx:any, err:string) => {
                // ctx will be null here, since little-loader is really basic.
                // => Agent must self-register on the bus.
                if(err) return reject(err);
                resolve(ctx as IAbstractBusAgent);
            });
        });
    }
}