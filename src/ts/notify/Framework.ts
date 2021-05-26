import { ReplaySubject, Subject } from "rxjs";
import { EVENT_NAME, INotice, INotifyFramework, LangChangedNotice } from "./interfaces";

type SubjectRegistry = { [name:string]:Subject<INotice> };

class NotifyFramework implements INotifyFramework {
    private subjects:SubjectRegistry = {};

    onEvent<T extends INotice>( eventName:string ):Subject<T> {
        if( typeof this.subjects[eventName] === "undefined" ) {
            // Create specific subjects if needed.
            if( EVENT_NAME.LANG_CHANGED === eventName ) {
                // Replays or emits the latest value to the subscribers.
                // See https://www.learnrxjs.io/learn-rxjs/subjects/replaysubject
                this.subjects[eventName] = new ReplaySubject<LangChangedNotice>(1) as unknown as Subject<INotice>;
            } else {
                this.subjects[eventName] = new Subject<T>()  as unknown as Subject<INotice>;
            }
        }
        return this.subjects[eventName] as unknown as Subject<T>;
    }
}

/** The whole framework is a singleton. */
export const notify:NotifyFramework = new NotifyFramework();
