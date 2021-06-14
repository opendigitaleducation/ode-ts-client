import { IWidgetModel, WidgetPosition } from "../session/interfaces";
import { widgets } from "./Framework";

//-------------------------------------
export abstract class WidgetFrameworkFactory {
//-------------------------------------
  static instance(): IWidgetFramework { 
    return widgets;
  }
}

//-------------------------------------
export interface IWidgetFramework {
//-------------------------------------
  /** Loads the widget configuration. */
  initialize( version:string|null, cdnDomain:string|null ):Promise<void>;

  /** Save user preferences */
  saveUserPrefs():Promise<any>;

  /** List widgets that are visible to the connected user. */
  readonly list: IWidget[];

  /** Retrieve a widget by name. */
  lookup( widgetName:string ):IWidget|undefined;
}

//-------------------------------------
export interface IWidget {
//-------------------------------------
  readonly platformConf:IWidgetModel;
/* TODO readonly schoolConf:any; */
  readonly userPref:WidgetUserPref;
}

//-------------------------------------
export type WidgetUserPref = {
//-------------------------------------
    index:number;
    show:boolean;
    position?: WidgetPosition;
};

//-------------------------------------
// WIDGETS
//-------------------------------------
export * from "./LastInfos.widget";
