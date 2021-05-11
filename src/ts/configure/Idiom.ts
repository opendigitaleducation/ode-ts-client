import { AddBundleCallback, IIdiom } from "./interfaces";
import { TransportFrameworkFactory } from "../transport/interfaces";
import { EVENT_NAME, LangChangedNotice, NotifyFrameworkFactory } from "../notify/interfaces";
import { Subscription } from "rxjs";

const notify    = NotifyFrameworkFactory.instance;
const http      = TransportFrameworkFactory.instance.http;

const bundle:{[key:string]:string} = {};
const promises:{[path:string]:Promise<void>} = {};

export class Idiom implements IIdiom {

    translate( key:string ):string {
        key = key ?? '';
        return bundle[key] === undefined ? key : bundle[key];
    }

    addBundlePromise(path:string):Promise<void> {
        this.addBundle(path);
        return promises[path];
    }

    addBundle(path:string, callback?:AddBundleCallback): void {
        // load bundle only once
        const oldPromise = promises[path];
        if (oldPromise) {
            if (callback) {
                oldPromise.then(callback).catch(callback);
            }
        } else {
            // Create a Promise now, to avoid loading a bundle more than once.
            let _resolve:AddBundleCallback, _reject:AddBundleCallback;
            promises[path] = new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            });
            // Then load the bundle.
            http.get<string, string>( path ).then( response => {
                try {
                    this.addKeys( JSON.parse(response) );
                    if(typeof callback === "function"){
                        callback();
                    }
                    _resolve();
                }
                catch(e){
                    if(typeof callback === "function"){
                        callback();
                    }
                    _reject();
                }
            });
        }
    }

    addTranslations(folder:string, callback?:AddBundleCallback):void {
        // Load translations once language is known.
        const subscription = notify.onEvent<LangChangedNotice>( EVENT_NAME.LANG_CHANGED )
        .subscribe( notice => {
            this.addBundle(folder + '/' + notice.newLanguage + '.json', callback);
            subscription.unsubscribe();
        });
    }

    addKeys(keys:any):void {
        Object.assign( bundle, keys );
    }

    removeAccents( str:string ):string {
        for(var i=0; i<defaultDiacriticsRemovalMap.length; i++) {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }
        return str;
    }
}