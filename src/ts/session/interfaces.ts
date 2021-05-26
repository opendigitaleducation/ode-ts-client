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
  initialize():Promise<void>;
  session:ISession;
}

//-------------------------------------
export interface ISession {
//-------------------------------------
  readonly currentLanguage:string;
  readonly notLoggedIn:boolean;
  readonly description:IUserDescription;

  hasWorkflow( workflowName:string ):boolean;
  hasRight(resource:any, right:any):boolean;
}

export type Hobby = {
  visibility: "PRIVE"|"PUBLIC";
  category: "sport"|"cinema"|"animals"|"music"|"places"|"books";
  values: string;
}
export type Shool = {
  classes:Array<string>;  // ["TPS"]
  id: string;             // "09772a06-1362-4802-a475-66a87d9cb679"
  name: string;           // "MY DEV SCHOOL"
}
//-------------------------------------
export interface IUserDescription {
//-------------------------------------
  /*---- From /userbook/api/person ----*/
  alertSize: boolean;
  oldPicture: string;   // "/workspace/document/aaaabbbb-ccdd-dead-beef-0123456789ab"
  picture: string;      // "no-avatar.jpg"
  quota: number;        // 1048576000
  storage: number;      // 106653578
  theme: string;        // "default"
  userid: string;       // "12345678-9abc-def0-1234-56789abcdef0"

  /*---- From /directory/userbook/_user_id_ ----*/
  address: string;
  birthdate: string;    // "1980-01-20"
  displayName: string;  // "LASTNAME Firstname"
  email: string;
  health: string;       // ?
  hobbies: Array<Hobby>;
  id: string;           // "12345678-9abc-def0-1234-56789abcdef0"
  login: string;
  mobile: string;
  mood: 'default'|'happy'|'proud'|'dreamy'|'love'|'tired'|'angry'|'worried'|'sick'|'joker'|'sad';
  motto: string;        // "Carpe diem"
  photo: string;        // "no-avatar.jpg"
  relatedId: any;       // null
  relatedName: any;     // null
  relatedType: any;     // null
  schools: Array<Shool>;
  tel: string;
  type:Array<string>    // ["Teacher"];
  profiles:Array<string>// ["Teacher"];
  userId: string;       // "12345678-9abc-def0-1234-56789abcdef0"
  visibleInfos: Array<string>;  // ["SHOW_BIRTHDATE"]
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

