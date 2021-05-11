
//-------------------------------------
export interface IGlobal {
//-------------------------------------
  readonly currentLanguage:string;
  readonly notLoggedIn:boolean;
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
export interface IMe {
//-------------------------------------
}

//-------------------------------------
export interface IConfigurationFramework {
//-------------------------------------
  readonly global:IGlobal;
  readonly theme:ITheme;
  readonly idiom:IIdiom;
  readonly me:IMe;
}

//-------------------------------------
export abstract class ConfigurationFrameworkFactory {
//-------------------------------------
  static readonly instance: IConfigurationFramework;
}
