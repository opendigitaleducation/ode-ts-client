export * from './globals';

/* These interfaces describe, from the UI point of view :
 * - Data types and contants, with a semantic meaning : applications, resources, actions on resources...
 * - High-level API : an explorer context (IExplorerContext),
 * - Low-level API : access to the communication bus, if needed (IBus, IBusAgent)
 */
export * from './explorer/interfaces';

/* This is the Explorer Framework entry point */
export { explorer } from "./explorer/ExplorerFramework";

/* These utility classes offer, from the applications' perspective :
 * CURRENTLY BEING TESTED, WILL PROBABLY BE REFACTORED
 * => Agents will register themselves instead of having the bus asking for it.
 *    The framework would then export a method for agents to register their supported Actions.
 */
export { IAbstractBusAgent, AbstractBusAgent } from './explorer/Agent';


/* Entry point of the Configuration framework. */
export { config } from "./configuration/ConfigurationFramework";



/** Hack pour rendre compatible le module commonjs avec une balise <script> dans un navigateur. */
declare var window:any;
declare var module:any;
if(typeof window!=='undefined') {
    window.entcore = window.entcore||{};
    window.entcore["ode-ts-client"] = module.exports;
}