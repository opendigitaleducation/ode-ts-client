import { session } from "./Framework";

//-------------------------------------
export abstract class SessionFrameworkFactory {
//-------------------------------------
  static instance():ISessionFramework {
    return session
  };
}

//-------------------------------------
export interface ISessionFramework {
//-------------------------------------
  initialize():void;
  session:ISession;
}

//-------------------------------------
export interface ISession {
//-------------------------------------
  readonly currentLanguage:string;
  readonly notLoggedIn:boolean;
  hasWorkflow( workflowName:string ):boolean;
  hasRight(resource:any, right:any):boolean;
}


////////////////////////////////////////// LEGACY

//-------------------------------------
export interface IUserInfo {
//-------------------------------------
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

export interface IWidgetModel {
  application?: string;   // "Actualites"
  i18n: string;           // "/actualites/public/widgets/last-infos-widget/i18n"
  id: string;
  js: string;             // "/actualites/public/widgets/last-infos-widget/last-infos-widget.js"
  mandatory: boolean;
  name: string;           // "last-infos-widget"
  path: string;           // "/actualites/public/widgets/last-infos-widget/last-infos-widget.html"
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

