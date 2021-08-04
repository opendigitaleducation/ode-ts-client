import { App } from "../globals";
import { IWebApp } from "../session/interfaces";
import { configure } from "./Framework";

//-------------------------------------
export abstract class ConfigurationFrameworkFactory {
//-------------------------------------
  static instance(): IConfigurationFramework { 
    return configure;
  }
}

//-------------------------------------
export interface IConfigurationFramework {
//-------------------------------------
  /** Framework initialization */
  initialize( version:string|null, cdnDomain:string|null ):Promise<void>;

  readonly Platform:{
      readonly deploymentTag:string;
      readonly cdnDomain:string;
      readonly apps: {
        /** Initialize an app (preload its public conf and i18n) */
        initialize(app:App):Promise<void>;
        /** Load and return the public conf of an app. */
        getPublicConf(app:App):Promise<any>;
        /** Load the i18n of an app. */
        loadI18n(app:App):Promise<void>;
      };
      readonly theme:ITheme;
      readonly analytics:{
        parameters<T extends ITrackingParams>(type:TrackingType):Promise<T|undefined>;
        readonly status:AnalyticStatus;
      };
      readonly idiom:IIdiom;
      listLanguages():Promise<string[]>;
  }
  readonly School:{
      //apps; -> pinnedApps;
  }
  readonly User:{
    readonly preferences:IUserPreferences;
    readonly keepOpenOnLogout:boolean;
    readonly bookmarkedApps:Array<IWebApp>;

    loadAppPrefs(app:App):Promise<any>;
    saveAppPrefs(app:App):Promise<void>;

    loadLanguage():Promise<string>;
    saveLanguage( lang:string ):Promise<void>;
  }
}

export type AnalyticStatus = "void" | "pending" | "ready" | "failed";
export type TrackingType = "matomo" | "internal";
export interface ITrackingParams {
    trackOnly: string[];
    doNotTrack: string[];
    detailApps: boolean;
}
export interface IMatomoTrackingParams extends ITrackingParams {
  url:string;
  siteId: number;
  UserId: string;
  Profile: string;
  School: string;
  Project: string;
}

//-------------------------------------
export interface ITheme {
//-------------------------------------
  readonly skinName:string;
  readonly themeName:string;
  readonly skin:string;
  readonly themeUrl:string;
  readonly portalTemplate: string;
  readonly basePath: string;
  readonly logoutCallback: string;
  readonly skins:Array<IThemeConfOverriding>;

  /** Check if the "school degree" of the current theme is 1D ("panda", or an override of it). */
  readonly is1D:boolean;

  /** Check if the "school degree" of the current theme is 2D ("theme-open-ent" or an override of it). */
  readonly is2D:boolean;

  /** Get the theme/skin configuration. */
  getConf( version?:string ): Promise<IThemeConf>;

  /** Await for theme to be fully loaded (skin, overrides, degrees...). */
  onFullyReady():Promise<ITheme>;

  /** Await for skin conf to be loaded. */
  onSkinReady():Promise<ITheme>;

  /** Await for overrides conf to be loaded. */
  onOverrideReady():Promise<IThemeOverrides>;

  /** List available themes. */
  listThemes():Promise<IThemeDesc[]>;

  /** Configure UI with this theme by default. */
  setDefaultTheme( theme:IThemeDesc ):void; // TODO: refactor, move to user's configuration ?

  /** List available skins. */
  listSkins():Promise<IThemeConfOverriding[]>;

/* FIXME faire le tri parmi les membres restants : on garde, on bouge, on jette ?
themeConf: undefined,
themeConfPromise: Promise<void>;
getHelpPath(): Promise<String>;
*/
}

//-------------------------------------
export interface IThemeDesc {
//-------------------------------------
  _id: string;
  displayName: string;
  path: string;
}

//-------------------------------------
export interface IThemeConf {
//-------------------------------------
	dependencies: {
		themes: { [name:string]:/*pathRegex*/string };
		widgets: { [name:string]:/*pathRegex*/string };
	},
	emitWrapper: boolean,
	overriding: Array<IThemeConfOverriding>;
}

//-------------------------------------
export interface IThemeConfOverriding {
//-------------------------------------
  parent: "panda" | "theme-open-ent";
  child: string;
  bootstrapVersion: string;
  skins: string;
  help: string;
  group?: string;
  edumedia: {
    uri: string;
    pattern: string;
    ignoreSubjects?: Array<string>;
  };
}

export type IThemeOverrides = {
  [app in App]?: string;
};

export type AddBundleCallback = () => void|Promise<void>;
//-------------------------------------
export interface IIdiom {
//-------------------------------------
  translate( key:string ):string;
  addBundlePromise(path:string):Promise<void>;
  addBundle(path:string, callback?:AddBundleCallback):void;
  addTranslations(folder:string, callback?:AddBundleCallback):void;
  addAllTranslations(folders:string[]):Promise<void>;
  addKeys(keys:any):void;
  removeAccents( str:string ):string;
}

export type UserPreferenceKey = 'apps'|'widgets'|'language'|'authenticatedConnectorsAccessed'|App;
//-------------------------------------
export interface IUserPreferences {
//-------------------------------------
  data: {[key in UserPreferenceKey]?: any};
  get(key: UserPreferenceKey):any; 
  load(key: UserPreferenceKey, defaultTo?: any): Promise<any>;
  update(key: UserPreferenceKey, data: any): IUserPreferences;
  save(key: UserPreferenceKey): Promise<void>;
};

