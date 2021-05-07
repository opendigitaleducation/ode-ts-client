import { Subject } from "rxjs";
import { INotice, INotifyFramework, NotifyFrameworkFactory } from "./interfaces";

type SubjectRegistry = { [name:string]:Subject<INotice> };

class NotifyFramework implements INotifyFramework {
    private subjects:SubjectRegistry = {};

    onEvent<T extends INotice>( eventName:string ):Subject<T> {
        return (this.subjects[eventName] = this.subjects[eventName] ?? new Subject<T>()) as unknown as Subject<T>;
    }
}

/** The whole framework is a singleton. */
export const notify:INotifyFramework = NotifyFrameworkFactory.instance = new NotifyFramework();
