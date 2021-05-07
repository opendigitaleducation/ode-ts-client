import { Subject } from "rxjs";

//-------------------------------------
export interface INotice {
//-------------------------------------
      eventName:string;
}

//-------------------------------------
export interface INotifyFramework {
//-------------------------------------
      onEvent<T extends INotice>( eventName:string ):Subject<T>;
}

//-------------------------------------
export abstract class NotifyFrameworkFactory {
//-------------------------------------
      static instance: INotifyFramework;
}
