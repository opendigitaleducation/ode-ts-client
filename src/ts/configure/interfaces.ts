
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

export interface IWebApp {
  address: string;        // "/mindmap"
  casType?: string;       // "null"
  display: boolean;       // true
  displayName: string;    // "mindmap"
  icon: string;           // "mindmap-large"
  isExternal: boolean;    // false
  name: string;           // "Mindmap"
  prefix?: string;        // "/mindmap"
  scope: Array<string>;   // [""]
  target?: any;           // "_blank"
}

export interface IWorkflowAuth {
  displayName: string;
  name: string;
  type: string;
}

export interface IWidgetModel {
  application?: string;   // "Actualites"
  i18n: string;           // "/actualites/public/widgets/last-infos-widget/i18n"
  id: string;
  js: string;             // "/actualites/public/widgets/last-infos-widget/last-infos-widget.js"
  mandatory: boolean;
  name: string;           // "last-infos-widget"
  path: string;           // "/actualites/public/widgets/last-infos-widget/last-infos-widget.html"
}

export interface IUserInfo {
  apps: Array<IWebApp>;
  authorizedActions: Array<IWorkflowAuth>;
  birthDate: string;  // "1980-01-13"
  children: any;
  childrenIds: Array<string>;
  classNames: Array<string>;
  classes: Array<any>;
  deletePending: boolean;
  externalId: string;
  federated?: any;
  federatedIDP?: any;
  firstName: string;
  forceChangePassword?: any;
  functions: { ADMIN_LOCAL?: {code:string, scope: Array<string>} };
  groupsIds: Array<string>;
  hasApp: boolean;
  hasPw: boolean;
  lastName: string;
  level: string;
  login: string;
  needRevalidateTerms: any;
  optionEnabled: Array<any>;
  preferences?: { save: (pref:any, data:any) => void; }
  sessionMetadata: { _id:string; userId:string; };
  structureNames: Array<string>;
  structures: Array<string>;
  type: "ENSEIGNANT" | "ELEVE" | "PERSRELELEVE" | "SUPERADMIN" | "PERSEDUCNAT";
  uai: Array<any>;
  userId: string;
  username: string;
  widgets: Array<IWidgetModel>;
}
//-------------------------------------
export interface IMe {
//-------------------------------------
  readonly session:IUserInfo;
  readonly keepOpenOnLogout:boolean;
  hasWorkflow( workflowName:string ):boolean;
  hasRight(resource:any, right:any):boolean;

  // TODO Finir l'interface, voir infra-front/me.ts
}

//-------------------------------------
export interface IConfigurationFramework {
//-------------------------------------
  initialize( loggedIn:boolean ):void;
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
