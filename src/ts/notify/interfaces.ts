import { Subject } from "rxjs";

export const EVENT_NAME = {
	LANG_CHANGED: "langChanged"
,	BOOTSTRAPPED: "bootstrapped"	// Success and error are both notified. Check BootstrappedNotice content.
} as const;
export type EventName = typeof EVENT_NAME[keyof typeof EVENT_NAME];

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
export class BootstrappedNotice implements INotice {
//-------------------------------------
	readonly eventName:EventName = EVENT_NAME.BOOTSTRAPPED;
	constructor( 
		public me?:any,
		public failureText?:string
	) {}
}

//-------------------------------------
export interface INotifyFramework {
//-------------------------------------
	onEvent<T extends INotice>(eventName: string): Subject<T>;
}

//-------------------------------------
export abstract class NotifyFrameworkFactory {
//-------------------------------------
	static readonly instance: INotifyFramework;
}
