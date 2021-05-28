import { transport } from "../transport/Framework";
import { App } from "../globals";
import { configure } from "./Framework";

const http = transport.http;
const lang = configure.Platform.idiom;

//-------------------------------------
export class AppConf {
//-------------------------------------
	private _publicConf:{[key in App]?: any} = {};

	initialize(app:App):Promise<void> {
		return Promise.all([
			this.getPublicConf(app),
			this.loadI18n(app)
		]).then( res => {
			//void
		});
	}

	public async getPublicConf(app:App):Promise<any> {
		if( !this._publicConf[app] ) {
			this._publicConf[app] = await http.get<any>( 
				`/${app}/conf/public`, 
				{queryParams:{'_':configure.Platform.deploymentTag}} 
			);
		}
		return this._publicConf[app];
	}

	public loadI18n(app:App):Promise<void> {
		return lang.addBundlePromise(`/${app}/i18n`);
	}
}
