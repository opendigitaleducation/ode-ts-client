import { IWidgetModel, WidgetPosition } from "../session/interfaces";
import { widgets } from "./Framework";

//-- Widgets name
export const WIDGET_NAME = {
  LAST_INFOS:   "last-infos-widget",
  BIRTHDAY:     "birthday",
  CALENDAR:     "calendar-widget",
  CARNET:       "carnet-de-bord",
  RECORD:       "record-me",
  MOOD:         "mood",
  MY_APPS:      "my-apps",
  NOTES:        "notes",
  RSS:          "rss-widget",
  BOOKMARK :    "bookmark-widget",
  QWANT:        "qwant",
  QWANT_JUNIOR: "qwant-junior",
  AGENDA:       "agenda-widget",
  CURSUS:       "cursus-widget",
  MAXICOURS:    "maxicours-widget"
} as const;
export type WidgetName = typeof WIDGET_NAME[keyof typeof WIDGET_NAME];

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
