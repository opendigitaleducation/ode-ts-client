import { ITheme, IThemeOverrides } from "../configure/interfaces";
import { IUserInfo } from "../session/interfaces";
import { notify } from "./Framework";

//-------------------------------------
export abstract class NotifyFrameworkFactory {
//-------------------------------------
	static instance():INotifyFramework {
		return notify;
	}
}

//-------------------------------------
export abstract class INotifyFramework {
//-------------------------------------
	/**
	 * Utility method : wrap your own Promise.
	 * Or use one of the predefined promises.
	 */
	abstract promisify<T>():IPromisified<T>;

	/**
	 * Promise / resolve / reject of current user's language.
	 */
	abstract onLangReady():IPromisified<string>;

	/**
	 * Promise / resolve / reject of current user's session.
	 */
	abstract onSessionReady():IPromisified<IUserInfo>;

	 /**
	 * Promise / resolve / reject of asynchronous skin.
	 * This data is not intended to change after being resolved.
	 */
	abstract onSkinReady():IPromisified<ITheme>;

	/**
	 * Promise / resolve / reject of asynchronous skin overrides.
	 * This data is not intended to change after being resolved.
	 */
	abstract onOverridesReady():IPromisified<IThemeOverrides>;

}

//-------------------------------------
export interface IPromisified<T> {
//-------------------------------------
	readonly promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>)=>void;
    reject: (reason?: any)=>void;
}
