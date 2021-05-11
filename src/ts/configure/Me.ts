import { ConfigurationFrameworkFactory, IMe } from "./interfaces";
import { TransportFrameworkFactory } from "../transport/interfaces";
import { EVENT_NAME, BootstrappedNotice, NotifyFrameworkFactory } from "../notify/interfaces";

const notify    = NotifyFrameworkFactory.instance;

const http = TransportFrameworkFactory.instance.http;
const idiom = ConfigurationFrameworkFactory.instance.idiom;

export class Me implements IMe {
    private _me:any;

    private setCurrentModel( me:any ) {
        this._me = me;
        // Notify that current model has changed.
        notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).next( new BootstrappedNotice(me, true) );
    }

    bootstrap() {
        http.get<void, string>( '/auth/oauth2/userinfo' ).then( responseText => {
            this.setCurrentModel( JSON.parse(responseText) );
        }).catch( (e:Error) => {
            notify.onEvent<BootstrappedNotice>( EVENT_NAME.BOOTSTRAPPED ).next( new BootstrappedNotice(null, e.message) );
        });
    }

    
}