import { Shareable } from './Rights';

export interface Actions {
    error(cb: Function): void;
}
export interface CopyRightsParams {
    provider: { resource: Shareable, application: string }, 
    target: { resources: Shareable[], application: string }
}
export interface AppBehaviours {
    model: any;
    rights: { resource:any, workflow:any };
    loadResources(): Promise<any>;
    sniplets: any; 
}
export declare interface Behaviours {
    storedRights: any;
    sharingRights(): Promise<any>;
    appSharingRights( prefix:string ): Promise<any>;
    copyRights( params:CopyRightsParams ): Promise<any>;
	register( application:string, appBehaviours:any ): void;
    findRights( serviceName:string, resource:AppBehaviours ): Promise<any>;
    // @deprecated findBehaviours(serviceName, resource): void;
    loadBehaviours( serviceName:string, callback: ((resource:AppBehaviours)=>void) ): Actions;
    load( serviceName:string ): Promise<any>;
    findWorkflow( serviceName:string ): Promise<any>;
    workflowsFrom( obj:any, dependencies:any ): any;
	applicationsBehaviours: any;
}
export declare var Behaviours:Behaviours;