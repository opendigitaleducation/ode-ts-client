import { AnalyticStatus, IXitiTrackingParams, IMatomoTrackingParams, ITrackingParams, TrackingType } from "./interfaces";
import { transport } from "../transport/Framework";
import { ERROR_CODE, IPromisified } from "..";
import { session } from "../session/Framework";
import { notify } from "../notify/Framework";
import { configure } from "./Framework";

type ParamsByTrackingSystem = {
	type: "none"|"internal"|"matomo";
	internal?:ITrackingParams,
	matomo?:IMatomoTrackingParams,
	xiti?:IXitiTrackingParams
};

type XitiConf = {
	//Springboard constants
	ID_COLLECTIVITE: number|'';
	ID_PLATEFORME: number|'';
	ID_PROJET: number|'';
  
	//Structure var
	ID_ETAB?: 0|''|{id:number; collectiviteId?:any; plateformeId?:any; projetId?:any;};
  
	//App vars
	ID_SERVICE?: number|'';
	LIB_SERVICE?: number|string;
	ENABLE_PROXY?: boolean;
  
	//User vars
	ID_PERSO?: string;
	ID_PROFIL?: number;
  
	//Xiti conf
	active:boolean;
	config:boolean;
	structureMap?:{ [structureId:string]: {id:number; collectiviteId?:any; plateformeId?:any; projetId?:any;}};
}

//-------------------------------------
export class Analytics {
//-------------------------------------
	private _status:AnalyticStatus = "void";
	private _params?:IPromisified<ParamsByTrackingSystem>;

	get status():AnalyticStatus {
		return this._status;
	}

	xiti():Promise<IXitiTrackingParams|undefined> {
		// XiTi does not implement ITrackingParams but behaves like it does.
		return this.parametersWithCheck("xiti" as TrackingType, false) as Promise<IXitiTrackingParams|undefined>;
	}

	parameters<T extends ITrackingParams>(type:TrackingType):Promise<T|undefined> {
		return this.parametersWithCheck<T>(type, true);
	}

	protected async parametersWithCheck<T extends ITrackingParams>(type:TrackingType, checkType:boolean):Promise<T|undefined> {
		if( !this._params ) {
			this.initialize();
		}
		return this._params?.promise.then( params => (!checkType || params.type===type) ? params[type] as T : undefined );
	}

	initialize():Promise<void> {
		if( this._params ) {
			return Promise.resolve();
		}
		this._params = notify.promisify<ParamsByTrackingSystem>();
		this._status = "pending";
		return Promise.all([
			transport.http.get<ParamsByTrackingSystem & {multiple?:ITrackingParams}>('/analyticsConf'),
			//FIXME change servers config to only keep the "all-in-one" query to /analyticsConf.
			transport.http.get<XitiConf>('/xiti/config')
		])
		.then( async tuple => {
			// Sanitize results
			// FIXME what to do with type "multiple" ?
			if( !tuple || !tuple[0] || !tuple[0].type ) {
				// Data seems corrupted
				throw ERROR_CODE.MALFORMED_DATA;
			}
			this._params?.resolve( tuple[0] );

			// Add XiTi config to the resulting object, if active.
			if( tuple[1] && tuple[1].active ) {
				await this.initializeXiti( tuple[1] );
			}
			this._status = "ready";
		})
		.catch( e => {
			this._status = "failed";
			this._params?.reject();
			throw e;
		});
	}

	private async initializeXiti( data:XitiConf ) {
		//Profile id map
		const profileMap = {
			"Student": 1,
			"Teacher": 2,
			"Relative": 3,
			"Personnel": 4
		}

		//Service map
		const serviceMap = {
			"": "Page_ENT",
			1:  "Stockage_Partage",
			2:  "Travail_Collaboratif",
			3:  "Notes",
			4:  "Absences",
			5:  "Services_Vie_Scolaire",
			6:  "Gestion_Competences",
			7:  "Gestion_Temps",
			9:  "Cahier_Textes",
			10: "Courrier_Electronique",
			11: "Actualites",
			12: "Reservation_Ressources",
			13: "Ressources_En_Ligne",
			15: "Documentation_CDI",
			16: "Orientation",
			17: "Parcours_Pedagogiques",
			18: "Services_Collectivites",
			19: "Visioconference"
		}

		const me = await notify.onSessionReady().promise;
		const getOrElse = (map:any, item:any, elseItem:any) => {
			return (map && item && map[item]) ? map[item] : elseItem;
		}
		const convertStringId = (stringId:string) => {
			let buffer = "";
			for(let i = 0; i < stringId.length; i++) {
				buffer += stringId.charCodeAt(i);
			}
			return buffer;
		}

		const xitiConf:IXitiTrackingParams = {
			//Springboard constants
			ID_COLLECTIVITE: "",
			ID_PLATEFORME: "",
			ID_PROJET: "",

			//Structure var
			ID_ETAB: "",

			//App vars
			ID_SERVICE: "",
			LIB_SERVICE: "Page_ENT",

			//User vars
			ID_PERSO: convertStringId(me.userId),
			ID_PROFIL: 6
		};

		xitiConf.ID_COLLECTIVITE = data.ID_COLLECTIVITE;
		if( data.structureMap && me && me.structures && me.structures.length > 0 ) {
			if( data.structureMap[me.structures[0]]?.plateformeId ) {
				xitiConf.ID_PLATEFORME = data.structureMap[me.structures[0]].plateformeId;
			}
			if( data.structureMap[me.structures[0]]?.projetId ) {
				xitiConf.ID_PROJET = data.structureMap[me.structures[0]].projetId;
			}
			xitiConf.ID_ETAB = data.structureMap[me.structures[0]];

			xitiConf.ID_PROFIL = getOrElse( profileMap, session.session.description.profiles[0], 6);
		} else {
			xitiConf.ID_ETAB = 0;
		}

        const appPrefix = session.session.currentApp;
        if( appPrefix ) {
			//Retrieves application dependent vars
			// Note 2021-10-05 : this implementation of xiti will probably only hit the timeline app.
			// FIXME Should we keep these hacks ?
			// //!\ Temporary Userbook workaround  /!\
			// var inUserbook = this.locationPath.indexOf("/userbook") === 0
			// ////////////////////////////////////////

			// // Eliot workaround //
			// var inEliot = false;
			// if(typeof eliotPrefix !== "undefined"){
			//     inEliot = true
			// }
			// var currentLocation = inEliot ? '/eliot/'+eliotPrefix : this.locationPath
			//const currentLocation = this.locationPath;
			const currentLocation = appPrefix; // currentLocation denotes an old dependance on the browser, which can not exist anymore. Think mobile !
			const appConf = await configure.Platform.apps.getPublicConf( appPrefix );

			const serviceObj = getOrElse(appConf.xiti, 'ID_SERVICE', {});
			xitiConf.ID_SERVICE = getOrElse(serviceObj, 'default', '');
			xitiConf.ENABLE_PROXY = getOrElse(serviceObj, 'proxy', false);
			for(var prop in serviceObj){
				// FIXME une table de correspondance entre currentLocation(appPrefix) et prop est-elle nécessaire ?
				if(prop !== 'default' && serviceObj.hasOwnProperty(prop) && currentLocation.indexOf(prop) >= 0){
					xitiConf.ID_SERVICE = serviceObj[prop];
					break;
				}
			}

			if( typeof xitiConf.ID_SERVICE === "number" )
				xitiConf.ID_SERVICE = isNaN(xitiConf.ID_SERVICE) ? '' : xitiConf.ID_SERVICE;
			xitiConf.LIB_SERVICE = getOrElse(serviceMap, xitiConf.ID_SERVICE, "Page_ENT");

			return xitiConf;
		}
	}
}
