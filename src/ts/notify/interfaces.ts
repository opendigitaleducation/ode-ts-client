import { Subject } from "rxjs";
import { IUserInfo } from "../session/interfaces";
import { notify } from "./Framework";

export const EVENT_NAME = {
	LANG_CHANGED:	"langChanged"
,	BOOTSTRAPPED:	"bootstrapped"	// Success and error are both notified. Check BootstrappedNotice content.
,	PREFERENCES_UPDATED:"preferences-updated"
,	HTTP_ERROR:		"httpError"
} as const;
export type EventName = typeof EVENT_NAME[keyof typeof EVENT_NAME];

//-------------------------------------
export abstract class NotifyFrameworkFactory {
//-------------------------------------
	static readonly instance: INotifyFramework = notify;
}

//-------------------------------------
export abstract class INotifyFramework {
//-------------------------------------
	abstract onEvent<T extends INotice>(eventName: string): Subject<T>;
}

//-------------------------------------
export interface INotice {
//-------------------------------------
	readonly eventName: EventName;
}

//-------------------------------------
export class LangChangedNotice implements INotice {
//-------------------------------------
	readonly eventName:EventName = EVENT_NAME.LANG_CHANGED;
	constructor( 
		public oldLanguage:string, 
		public newLanguage:string 
	) {}
}

//-------------------------------------
export class HttpErrorNotice implements INotice {
//-------------------------------------
	readonly eventName:EventName = EVENT_NAME.HTTP_ERROR;
	constructor( 
		/** HTTP STATUS : 404, 500... */
		public status:string,
		/** Technical description of the error. */
		public text?:string
	){}
}

/** Notified when the current session is bootstrapped, or when an error prevent it. */
//-------------------------------------
export class BootstrappedNotice implements INotice {
//-------------------------------------
	readonly eventName:EventName = EVENT_NAME.BOOTSTRAPPED;
	constructor( 
		public userInfo?:IUserInfo,
		public failureText?:string
	) {}
}

//-------------------------------------
export class PreferencesUpdated implements INotice {
//-------------------------------------
	readonly eventName:EventName = EVENT_NAME.PREFERENCES_UPDATED;
	constructor( 
		public key:string,
		public data: any
	) {}
}
