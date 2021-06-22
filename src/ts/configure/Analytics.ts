import { AnalyticStatus, IMatomoTrackingParams, ITrackingParams, TrackingType } from "./interfaces";
import { transport } from "../transport/Framework";

type ParamsByTrackingSystem = {
	internal?:ITrackingParams,
	matomo?:IMatomoTrackingParams
};

//-------------------------------------
export class Analytics {
//-------------------------------------
	private _status:AnalyticStatus = "void";
	private _params?:ParamsByTrackingSystem;

	get status():AnalyticStatus {
		return this._status;
	}

	parameters<T extends ITrackingParams>(type:TrackingType):Promise<T|undefined> {
		if( !this._params ) {
			return this.initialize().then( () => {
				return this._params ? this._params[type] as T : undefined;
			});
		}
		return Promise.resolve( this._params[type] as T );
	}

	initialize():Promise<void> {
		this._status = "pending";
		return transport.http.get<ParamsByTrackingSystem & {multiple?:ITrackingParams}>('/analyticsConf')
			.then( params => {
				// FIXME sanitize params : what to do with type "multiple" ?
				this._params = params;
				this._status = "ready";
			})
			.catch( e => {
				this._status = "failed";
				throw e;
			});
	}
}
