import { Observable, Subject } from "rxjs";

//------------------------- Data types
//-- Error codes 
export const ERROR_CODE = {
  SUCCESS:          "0000"
 ,UNKNOWN:          "0010"
 ,NOT_INITIALIZED:  "0020"
 ,NOT_SUPPORTED:    "0030"
 ,APP_NOT_FOUND:    "0040"
 ,AGENT_NOT_FOUND:  "0050"
} as const;
export type ErrorCode = typeof ERROR_CODE[keyof typeof ERROR_CODE];

//-- Applications
export const APP = {
  EXPLORER:   "explorer"
 ,BLOG:       "blog"
 ,EXERCIZER:  "exercizer"
 // TODO compléter
} as const;
export type App = typeof APP[keyof typeof APP];   // type App = "explorer" | "blog" | "exercizer"...

//-- Resources
export const RESOURCE = {
  FOLDER:     "folder"
 ,BLOG:       "blog"
 ,EXERCISE:   "exercise"
} as const;
export type ResourceType = typeof RESOURCE[keyof typeof RESOURCE];

//-- App/Resource link
export const appNameForResource:{[R in ResourceType]: App} = {
  "folder":   APP.EXPLORER
, "blog":     APP.BLOG
, "exercise": APP.EXERCIZER
} as const;

//-- Actions (toaster)
export const ACTION = {
  INITIALIZE: "initialize"
 ,SEARCH:     "search"
 ,CREATE:     "create"
 ,OPEN:       "open"
 ,MANAGE:     "manage"      // Query properties metadata
 ,UPD_PROPS:  "properties"  // Update properties
 ,COMMENT:    "comment"
 ,DELETE:     "delete"
 ,MOVE:       "move"
 ,COPY:       "copy"
 ,EXPORT:     "export"
 ,SHARE:      "share"
 ,PUBLISH:    "publish"
 ,PRINT:      "print"
} as const;
export type ActionType = typeof ACTION[keyof typeof ACTION];

//-- Folders
export const FOLDER = {
  BIN:       "bin"
 ,DEFAULT:   "default"
} as const;
export type FolderType = typeof FOLDER[keyof typeof FOLDER];

//-- Filters
export const BOOLEAN_FILTER = {
  OWNER:      "owner"
 ,SHARED:     "shared"
 ,PUBLIC:     "public"
 ,FAVORITE:   "favorite"
} as const;
export type BooleanFilterType = typeof BOOLEAN_FILTER[keyof typeof BOOLEAN_FILTER];
export const STRING_FILTER = {
//  FOLDER:     "folder" // is instead an ID
} as const;
export type StringFilterType = typeof STRING_FILTER[keyof typeof STRING_FILTER];

//-- Sort orders
export const SORT_ORDER = {
 ASC:   "asc"
,DESC:  "desc"
} as const;
export type SortOrderType = typeof SORT_ORDER[keyof typeof SORT_ORDER];
export const SORT_BY = {
  NAME:         "name"
 ,MODIFY_DATE:  "modifiedAt"
 ,VIEWS:        "views"
 /*
//FIXME On devrait pouvoir trier sur tout champ issu d'un type de ressource (name, createdAt, authorId...) voir IResource
  createdAt: string;
  authorId: string;
  authorName: string;
  modifierId: ID;
  modifierName: string;
  modifiedAt: string;
  folderId?: ID;      // TODO à confirmer
  public?: boolean;
  shared?: boolean;
  favorite?: boolean;
  comments?: number;
*/
} as const;
export type SortByType = typeof SORT_BY[keyof typeof SORT_BY];

//-- Semantique
export type ID = string;
export type StringFilterValue = {
  value: string;  // Value of the filter (as sent to backend)
  i18n: string;   // Translation key of the filter (as displayed in frontend)
};

//-- Properties management
export const PROP_MODE = {
  READONLY: "RO"
 ,READWRITE: "RW"
} as const;
export type PropMode = typeof PROP_MODE[keyof typeof PROP_MODE];
export const PROP_TYPE = {
  TEXT:   "text"
 ,NUMBER: "number"
 ,DATE:   "date"
 ,IMAGE:  "image"
 // TODO more types ? Currencies...
} as const;
export type PropType = typeof PROP_TYPE[keyof typeof PROP_TYPE];
export const PROP_FORMAT = {
  PLAIN:  "plain"   // Plain text or number value, no formatting
  // TODO more format to come ? Full dates, months only, timestamps, regexp....
} as const;
export type PropFormat = typeof PROP_FORMAT[keyof typeof PROP_FORMAT];

//------------------------- Data models 
//-------------------------------------
export interface ISearchParameters {
//-------------------------------------
  types:ResourceType[];
  app:App;
  filters:FilterValues;
  orders?:OrderValues;
  pagination:IPagination;
  search?:String;
}
//-------------------------------------
export interface ISearchResults {
//-------------------------------------
  folders: IFolder[];
  pagination: IPagination;
  resources: IResource[];
}
//-------------------------------------
export interface IContext extends ISearchResults {
//-------------------------------------
  filters: IFilter[];
  orders: IOrder[];
  actions: IAction[];
  preferences: IPreferences;
}

//-------------------------------------
export interface IAction {
//-------------------------------------
  id: ActionType,
  available: boolean  // L'utilisateur a le droit workflow ou pas
  //FIXME comment relier les actions aux behaviours, qu'on va remplacer.
}

//-------------------------------------
export interface IFolder {
//-------------------------------------
  id: ID;
  name: string;
  type: FolderType | ID;
  childNumber: number; // à minima, 0 ou 1...
}

//-------------------------------------
export interface IFilter {
//-------------------------------------
  id: BooleanFilterType | StringFilterType;
  defaultValue?: string | string[] | boolean | boolean[];
  values?: StringFilterValue[];
}

//-------------------------------------
export interface IOrder {
//-------------------------------------
  id: SortByType;
  defaultValue?: SortOrderType;
  i18n: string;
}

//-------------------------------------
export interface IPagination { // TODO à tester
//-------------------------------------
  startIdx: number;
  maxIdx?: number;  // Si elastic search renvoie bien le nombre de hits 
  pageSize: number; // Sera égal à la valeur paramétrée côté serveur
}

//-------------------------------------
export interface IProperty {
//-------------------------------------
  property:keyof IResource;
  mode:PropMode;
  type:PropType;
  format?:PropFormat[];
}
  
//-------------------------------------
export interface IResource {
//-------------------------------------
  id: ID;
  name: string;
  thumbnail: string;   // URL : requis; ou bien déductible d’une convention ?
  application: App;
  createdAt: string;  // FIXME: S'entendre sur un format de date
  authorId: string;
  authorName: string;
  modifierId: ID;
  modifierName: string;
  modifiedAt: string; // FIXME: S'entendre sur un format de date
  folderId?: ID;      // TODO à confirmer
  public?: boolean;
  shared?: boolean;
  favorite?: boolean;
  views?: number;
  comments?: number;
}

//-------------------------------------
export interface IPreferences {
//-------------------------------------
  view: "card"|"list";
}

//------------------------- Service call parameters
//-------------------------------------
export interface IActionParameters {
//-------------------------------------
}
export type GetContextParameters = IActionParameters & ISearchParameters;
export type GetResourcesParameters = IActionParameters & ISearchParameters;
export type CreateFolderParameters = IActionParameters & {
  app:App
, type:ResourceType
, parentId: ID|"default"
, name: string
};
export type ManagePropertiesParameters = IActionParameters & { resources:IResource[] };
export type UpdatePropertiesParameters = IActionParameters & { resources:IResource[] };

//-------------------------------------
export interface IGroupUserRight {
//-------------------------------------
  read: boolean;
  contribute: boolean;
  manage: boolean;
  comment: boolean;
  userId?: ID;
  groupId?: ID;
}

export type FilterValues = {[B in BooleanFilterType]?: boolean} & {[S in StringFilterType]?: string} & {folder?: ID};
export type OrderValues  = {[O in SortByType]?: SortOrderType};

//------------------------- Service call results
//-------------------------------------
export interface IActionResult {
//-------------------------------------
// TODO : generic success, failure, error codes... should be placed here
}

export type GetContextResult = IActionResult & IContext;

export type GetResourcesResult = IActionResult & ISearchResults;

export type GetSubFoldersResult = IActionResult & {
  folders: IFolder[];
}
export type CreateFolderResult = IActionResult &  IFolder & {
  createdAt: string;
}
export type UpdateFolderResult = CreateFolderResult & {
  updatedAt: string;
  parentId: ID|"default";
}
export type ManagePropertiesResult = IActionResult & {
  properties: IProperty[]
};
export type UpdatePropertiesResult = IActionResult & { resources:IResource[] }


//-------------------------------------
//------------------- API (HIGH-LEVEL)
//-------------------------------------
/** Framework is a singleton. */
//-------------------------------------
export abstract class ExplorerFrameworkFactory {
//-------------------------------------
  static instance: IExplorerFramework;
}

//-------------------------------------
export interface IExplorerFramework {
//-------------------------------------
  /**
   * Instancie un contexte d'exploration .
   * @param types Types de ressources traitées par l'agent, minimum 1.
   * @param app Application à l'origine de l'appel.
   */
  createContext( types:ResourceType[], app:App ): IExplorerContext;
  
  /**
   * Retrieve the underlying communication bus.
   */
  getBus(): IBus;
}

//-------------------------------------
export interface IExplorerContext {
//-------------------------------------
  isInitialized(): boolean;
  /**
   * @return a new search context, or undefined if initialize() has not been called before.
   */
  getContext(): IContext|undefined;
  /**
   * @return search parameters in the current context, modifiable before any call to getResources() or initialize().
   */
  getSearchParameters(): ISearchParameters;
  /**
   * A flow of ISearchResults objects (generated by getResources() which should be called by your searches or pagination).
   */
  latestResources(): Observable<ISearchResults>;

  clear(): void;

  /**
   * Retrieves the first page of listed resources from the server.
   * Search parameters can be adjusted beforehand, @see getSearchParameters().
   * @return 
   */
  initialize(): Promise<IContext>;

  getResources(): Promise<GetResourcesResult>;

  getSubFolders( parentId:ID ): Promise<GetSubFoldersResult>;

  createFolder( resourceType:ResourceType, parentId:ID|"default", name:string ): Promise<CreateFolderResult>;

  updateFolder( folderId:ID, resourceType:ResourceType, parentId:ID|"default", name:string ): Promise<UpdateFolderResult>;

  share( resourceIds:ID[], rights:IGroupUserRight[] ): void;

  copy( targetId:ID, resourceIds:ID[], folderIds:ID[] ): void;

  move( targetId:ID, resourceIds:ID[], folderIds:ID[] ): void;

  delete( resourceIds:ID[], folderIds:ID[] ): void; //FIXME 1 seul tableau en paramètres ?

  /** Retrieves which properties of the resource(s) are manageable, can be modified and how. */
  manageProperties( resourceType:ResourceType, resources:IResource[] ): Promise<ManagePropertiesResult>;
  /** Update managed properties. */
  updateProperties( resourceType:ResourceType, resources:IResource[] ): Promise<UpdatePropertiesResult>;


/*//TODO ajouter des méthodes pour les autres actions du toaster ?
  CREATE:     "create"
 ,OPEN:       "open"
 ,COMMENT:    "comment"
 ,EXPORT:     "export"
 ,PUBLISH:    "publish"
 ,PRINT:      "print"
*/
}

//-------------------------------------
//-------------------- API (LOW-LEVEL)
//-------------------------------------
export interface IBus {
//-------------------------------------
  /** Allows registering an agent as being able to resolve 1 or more action on a type of resource. */
  consumer( res:ResourceType, action:ActionType, agent:IBusAgent ): void;

  /** Allows delegating an action on a type of resource, to a registered agent on the bus. */
  send( res:ResourceType, action:ActionType, parameters:IActionParameters ): Promise<IActionResult>;

  /** Utility function for retrieving an agent. */
  getAgentFor( res:ResourceType, action:ActionType ): IBusAgent|null;
}

//-------------------------------------
export interface IBusAgent {
//-------------------------------------
  /** Ask this agent to resolve an action. */
  activate( res:ResourceType, action:ActionType, parameters:IActionParameters ): Observable<IActionResult>;

// Ou bien, s'il y a besoin de dissocier agents et actions pour permettre plus d'interactions :
/*
  queryActivator( app:App, action:ActionType ): IActivator;
}
export interface IActivator {
  activate( parameters:IActionParameters ): Observable<IActionResult>;
}
*/
}

