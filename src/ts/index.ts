export * from './globals';

//-------------------------------- EXPLORER ----------------------------------
/* These interfaces describe, from the UI point of view :
 * - Data types and contants, with a semantic meaning : applications, resources, actions on resources...
 * - High-level API : an explorer context (IExplorerContext),
 * - Low-level API : access to the communication bus, if needed (IBus, IBusAgent)
 */
export * from './explore/interfaces';

/* This is the Explorer Framework entry point */
export { explorer } from "./explore/Framework";

/* These utility classes offer, from the applications' perspective :
 * CURRENTLY BEING TESTED, WILL PROBABLY BE REFACTORED
 * => Agents will register themselves instead of having the bus asking for it.
 *    The framework would then export a method for agents to register their supported Actions.
 */
export { IAbstractBusAgent, AbstractBusAgent } from './explore/Agent';

//---------------------------------- NOTIFY ----------------------------------
export * from './notify/interfaces';

//------------------------------- TRANSPORT ----------------------------------
export * from './transport/interfaces';

//---------------------------------- CONFIG ----------------------------------
export * from './configure/interfaces';

//---------------------------------- SESSION ----------------------------------
export * from './session/interfaces';


/** Hack pour rendre compatible le module commonjs avec une balise <script> dans un navigateur. */
declare var window:any;
declare var module:any;
if(typeof window!=='undefined') {
    window.entcore = window.entcore ?? {};
    window.entcore["ode-ts-client"] = window.entcore["ode-ts-client"] ?? module.exports;
}