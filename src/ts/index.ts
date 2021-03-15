/* These interfaces describe, from the UI point of view :
 * - Data types and contants, with a semantic meaning : applications, resources, actions on resources...
 * - High-level API : an explorer context (IExplorerContext),
 * - Low-level API : access to the communication bus, if needed (IBus, IBusAgent)
 */
export * from './interfaces';

/* This is the Framework entry point */
export { framework } from "./foundation/ExplorerFramework";

/* These utility classes offer, from the applications' perspective :
 * CURRENTLY BEING TESTED
 */
export { IAbstractBusAgent, AbstractBusAgent } from './foundation/Agent';




/** Hack pour rendre compatible le module commonjs avec une balise <script> dans un navigateur. */
declare var window:any;
declare var module:any;
if(typeof window!=='undefined') {
    window.entcore = window.entcore||{};
    window.entcore["ode-ts-client"] = module.exports;
}