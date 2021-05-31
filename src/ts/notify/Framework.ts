import { ReplaySubject, Subject } from "rxjs";
import { ITheme, IThemeOverrides } from "../configure/interfaces";
import { EVENT_NAME, IPromisified, INotice, INotifyFramework, LangChangedNotice } from "./interfaces";

type SubjectRegistry = { [name:string]:Subject<INotice> };
type PromiseRegistry = { [name:string]:Promisified<any> };

const ASYNC_DATA_NAME = {
	SKIN_READY:		"skinReady"
,	OVERRIDE_READY:	"overrideReady"
} as const;
type AsyncDataName = typeof ASYNC_DATA_NAME[keyof typeof ASYNC_DATA_NAME];


/** Utility class */
//-------------------------------------
export class Promisified<T> implements IPromisified<T> {
//-------------------------------------
    private _resolution?: (value: T | PromiseLike<T>) => void;
	private _rejection?: (reason?: any) => void;
	private _promise = new Promise<T>((_resolve, _reject) => {
		this._resolution = _resolve;
		this._rejection = _reject;
	});
	get promise():Promise<T>{
		return this._promise;
	}
    resolve(value: T | PromiseLike<T>) {
        this._resolution && this._resolution(value);
    }
    reject(reason?: any) {
        this._rejection && this._rejection(reason);
    }
}

/** The notify framework implementation. */
//-------------------------------------
class NotifyFramework implements INotifyFramework {
//-------------------------------------
    private subjects:SubjectRegistry = {};
    private promises:PromiseRegistry = {};

    onEvent<T extends INotice>( eventName:string ):Subject<T> {
        if( typeof this.subjects[eventName] === "undefined" ) {
            // Create specific subjects if needed.
            switch( eventName ) {
                case EVENT_NAME.LANG_CHANGED:
                    // Replays or emits the latest value to the subscribers.
                    // See https://www.learnrxjs.io/learn-rxjs/subjects/replaysubject
                    this.subjects[eventName] = new ReplaySubject<LangChangedNotice>(1) as unknown as Subject<INotice>;
                break;
                
                default:
                    this.subjects[eventName] = new Subject<T>()  as unknown as Subject<INotice>;
                break;
            }
        }
        return this.subjects[eventName] as unknown as Subject<T>;
    }

    private asyncData<T>( asyncDataName:string ):Promisified<T> {
        if( typeof this.promises[asyncDataName] === "undefined" ) {
            this.promises[asyncDataName] = new Promisified<T>()  as unknown as Promisified<INotice>;
        }
        return this.promises[asyncDataName]  as unknown as Promisified<T>;
    }

    public onSkinReady():Promisified<ITheme> {
        return this.asyncData<ITheme>(ASYNC_DATA_NAME.SKIN_READY);
    }

    public onOverridesReady():Promisified<IThemeOverrides> {
        return this.asyncData<IThemeOverrides>(ASYNC_DATA_NAME.OVERRIDE_READY);
    }
}

/** The whole framework is a singleton. */
export const notify:NotifyFramework = new NotifyFramework();
