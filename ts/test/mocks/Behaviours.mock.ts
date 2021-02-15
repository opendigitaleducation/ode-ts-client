import { IBehavioursAppBehaviours, IBehavioursCopyRightsParams, IBehaviours } from "../../src/legacy/Behaviours";
import * as SharingRightsData from "./data/sharing-rights.json";
import * as AppsSharingRightsData from "./data/apps-sharing-rights.json";

declare var Behaviours:IBehaviours;

export class BehavioursMock implements IBehaviours {
    storedRights = Object.assign( {}, AppsSharingRightsData, {json: SharingRightsData} ) as any;

    sharingRights(): Promise<any> {
        return Promise.resolve().then( ()=>this.storedRights.json );
    };
    appSharingRights(prefix: "blog"|"exercizer"): Promise<any> {
        return Promise.resolve().then( ()=>this.storedRights[prefix]||{} );
    };
    async copyRights(params: IBehavioursCopyRightsParams): Promise<void>{
        if(!params.provider.resource.shared){
            return;
        }
        /*
        let config = await this.sharingRights();
        let providerSharing = await this.appSharingRights(params.provider.application);
        let targetSharing = await this.appSharingRights(params.target.application);

        params.provider.resource.shared.forEach(function(share){
            if(share.userId === model.me.userId){
                return;
            }
            var data:any = {  };
            if(share.groupId){
                data.groupId = share.groupId;
            }
            else{
                data.userId = share.userId;
            }

            var bundles = { read: false, contrib: false, publish: false, comment: false, manager: false };
            for(var property in share){
                for(var bundle in providerSharing){
                    if(providerSharing[bundle].indexOf(property) !== -1){
                        var bundleSplit = bundle.split('.');
                        bundles[bundleSplit[bundleSplit.length - 1]] = true;
                        config[bundleSplit[bundleSplit.length - 1]].requires.forEach(function(required){
                            bundles[required] = true;
                        });
                    }
                }
            }

            function addRights(targetResource){
                data.actions = [];
                for(var bundle in bundles){
                    if(!bundles[bundle]){
                        continue;
                    }
                    for(var targetBundle in targetSharing){
                        var targetBundleSplit = targetBundle.split('.');
                        if(targetBundleSplit[targetBundleSplit.length - 1].indexOf(bundle) !== -1){
                            targetSharing[targetBundle].forEach(function(right){
                                data.actions.push(right);
                            });
                        }
                    }
                }

                http().put('/' + params.target.application + '/share/json/' + targetResource, http().serialize(data)).e401(function(){});
            }

            //drop rights if I'm not part of the group
            if(model.me.groupsIds.indexOf(share.groupId) === -1){
                params.target.resources.forEach(function(targetResource){
                    http().put('/' + params.target.application + '/share/remove/' + targetResource, data).done(function(){
                        addRights(targetResource);
                    }).e401(function(){});
                })
            }
            //simply add rights bundles (don't want to remove my own manager right)
            else{
                params.target.resources.forEach(addRights);
            }
        });
        */
    };
    register( application:string, appBehaviours:any ){
        this.applicationsBehaviours[application] = appBehaviours;
    };
    findRights( serviceName:string, resource:IBehavioursAppBehaviours ): Promise<any>{
        let resolveRights = () => {
            let serviceBehaviours = Behaviours.applicationsBehaviours[serviceName];
            if (typeof serviceBehaviours.resource === 'function') {
                serviceBehaviours.resourceRights = serviceBehaviours.resource;
            }

            if (typeof serviceBehaviours.resourceRights !== 'function' && typeof serviceBehaviours.rights === 'object') {
                var resourceRights = serviceBehaviours.rights.resource;
                /* //TODO voir si on peut émuler model.me facilement.
                serviceBehaviours.resourceRights = function (element) {
                    for (var behaviour in resourceRights) {
                        if (model.me && (model.me.hasRight(element, resourceRights[behaviour]) ||
                            (element.owner && (model.me.userId === element.owner.userId || model.me.userId === element.owner)))) {
                            element.myRights[behaviour] = resourceRights[behaviour];
                        }
                    }
                }
                */
            }
            if (typeof serviceBehaviours.resourceRights === 'function') {
                return serviceBehaviours.resourceRights(resource);
            }
            else {
                return {};
            }
        }

        return new Promise((resolve, reject) => {
            if (this.applicationsBehaviours[serviceName]) {
                if (!(resource as any).myRights) {
                    (resource as any).myRights = {};
                }

                resolve(resolveRights());
                return;
            }
            Behaviours.loadBehaviours(serviceName, () => {
                resolveRights();
            })
            .error(() => {
                resolveRights();
            });
        });
    };
    loadBehaviours( serviceName:string, callback: ((resource:IBehavioursAppBehaviours)=>void) ){
        let err = { cb: undefined as unknown };
        let actions = {
            error: function( cb:()=>void ){
                err.cb = cb;
            }
        };

        if (this.applicationsBehaviours[serviceName]) {
            if (this.applicationsBehaviours[serviceName].callbacks) {
                this.applicationsBehaviours[serviceName].callbacks.push(callback);
                this.applicationsBehaviours[serviceName].errors.push(err);
                return actions;
            }
            callback(this.applicationsBehaviours[serviceName]);
            return actions;
        }
        else {
            this.applicationsBehaviours[serviceName] = {
                callbacks: [callback],
                errors: [err]
            };
        }

        if(serviceName === '.') {
            return actions;
        }

        let callbacks = Behaviours.applicationsBehaviours[serviceName].callbacks;
        let errors = Behaviours.applicationsBehaviours[serviceName].errors;
        /*
        http().get('/' + serviceName + '/public/js/behaviours.js').done((content) => {
            callbacks.forEach((cb) => {
                cb(Behaviours.applicationsBehaviours[serviceName]);
            });
        })
        .error(() => {
            errors.forEach((err) => {
                if (typeof err.cb === 'function') {
                    err.cb();
                }
            });
            Behaviours.applicationsBehaviours[serviceName] = {failed: true};
        });
        */
        let content = null;
        switch( serviceName ) {
            case 'blog': content = require("./behaviours/blog.js"); break;
            case 'exercizer': content = null; break;
        }
        callbacks.forEach( (cb:(model:any)=>void) => {
            cb(Behaviours.applicationsBehaviours[serviceName]);
        });

        return actions;
    };
    load(serviceName: string): Promise<any>{
        return new Promise((resolve, reject) => {
            Behaviours.loadBehaviours(serviceName, () => {
                resolve(this.applicationsBehaviours[serviceName]);
            })
            .error(() => {
                reject();
            });
        });
    };
    findWorkflow( serviceName:string ): Promise<any>{
        var returnWorkflows = () => {
            if(!this.applicationsBehaviours[serviceName]){
                return {};
            }
            if(typeof this.applicationsBehaviours[serviceName].workflow === 'function'){
                return this.applicationsBehaviours[serviceName].workflow();
            }
            else{
                if(typeof this.applicationsBehaviours[serviceName].rights === 'object' && this.applicationsBehaviours[serviceName].rights.workflow){
                    if(!this.applicationsBehaviours[serviceName].dependencies){
                        this.applicationsBehaviours[serviceName].dependencies = {};
                    }
                    return this.workflowsFrom(this.applicationsBehaviours[serviceName].rights.workflow, this.applicationsBehaviours[serviceName].dependencies.workflow)
                }
            }
        };

        if(this.applicationsBehaviours[serviceName] && !this.applicationsBehaviours[serviceName].callbacks){
            return returnWorkflows();
        }

        return new Promise((resolve, reject) => {
            Behaviours.loadBehaviours(serviceName, () => {
                resolve(returnWorkflows());
            })
            .error(() => {
                reject();
            });
        });
    };
    workflowsFrom( obj:any, dependencies:any ){
        if(typeof obj !== 'object'){
            return {};
        }
        if(typeof dependencies !== 'object'){
            dependencies = {};
        }
        var workflow = { };
        for(var prop in obj){
            /* //TODO voir si on peut émuler model.me facilement.            
            if(model.me.hasWorkflow(obj[prop])){
                workflow[prop] = true;
                if(typeof dependencies[prop] === 'string'){
                    workflow[prop] = workflow[prop] && model.me.hasWorkflow(dependencies[prop]);
                }
            }
            */
        }

        return workflow;
    };
    applicationsBehaviours = {} as any;
}
