import { configure } from "./Framework";

//-------------------------------------
export abstract class ConfigurationFrameworkFactory {
//-------------------------------------
  static readonly instance: IConfigurationFramework = configure;
}

//-------------------------------------
export interface IConfigurationFramework {
//-------------------------------------
  initialize():void;
  readonly Platform:{
      readonly theme:ITheme;
      //analytics;
      readonly idiom:IIdiom;
      //widgets;
  }
  readonly School:{
      //widgets;
      //apps; -> pinnedApps;
  }
  readonly User:{
    readonly preferences:IUserPreferences;
    readonly keepOpenOnLogout:boolean;
  }
}

//-------------------------------------
export interface ITheme {
//-------------------------------------
}

export type AddBundleCallback = () => void|Promise<void>;
//-------------------------------------
export interface IIdiom {
//-------------------------------------
  translate( key:string ):string;
  addBundlePromise(path:string):Promise<void>;
  addBundle(path:string, callback?:AddBundleCallback):void;
  addTranslations(folder:string, callback?:AddBundleCallback):void;
  addKeys(keys:any):void;
  removeAccents( str:string ):string;
}

//-------------------------------------
export interface IUserPreferences {
//-------------------------------------
  [pref:string]: any;
  update( pref:string, data:any ):IUserPreferences;
  save( key:string ):Promise<void>
}
