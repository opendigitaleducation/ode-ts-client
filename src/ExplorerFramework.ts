//------------------------- Data types
//-- Applications
export const APP = {
  ANY:        "any"
 ,BLOG:       "blog"
 ,EXERCIZER:  "exercizer"
 // TODO compléter
} as const;
export type App = typeof APP[keyof typeof APP];   // type App = "any" | "blog" | "exercizer"

//-- Actions (toaster)
export const ACTION = {
  CREATE:     "create"
 ,OPEN:       "open"
 ,MANAGE:     "manage"
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

//-- Resources
export const RESOURCE = {
  BLOG:       "blog"
 ,EXERCISE:   "exercise"
} as const;
export type ResourceType = typeof RESOURCE[keyof typeof RESOURCE];

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

//-- Orders 
export const ORDER = {
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
export type OrderType = typeof ORDER[keyof typeof ORDER];

//-- Semantique
export type ID = string;
export type StringFilterValue = {
  value: string;  // Value of the filter (as sent to backend)
  name: string;   // Translation key of the filter (as displayed in frontend)
};


let test = () => {
  /*
  Aïe ! 
  Property 'values' does not exist on type 'ObjectConstructor'. 
  Do you need to change your target library? 
  Try changing the `lib` compiler option to 'es2017' or later.ts(2550)
  */
  //for( const filter of Object.values(FILTER) ) {
    
  //}
}

//------------------------- Data models 
//-------------------------------------
export interface IContext {
//-------------------------------------
  // Détailler toutes les valeurs possibles (Folders, Filters...)
  // ET la(les) valeur(s) courante(s) qui sert de modèle pour l'IHM (composants angular)
  // (potentiellement, plusieurs valeurs pour même filtre)
  folders: IFolder[];
  filters: IFilter[];
  orders: IOrder[];
  actions: IAction[];
  pagination: IPagination;
  resources: IResource[];
  preferences: IPreferences;
}

//-------------------------------------
export interface ISearchParameters {
//-------------------------------------
  types:ResourceType[];
  app?:App;
  filters:FilterValues;
  orders:IOrder;
  pagination:IPagination;
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
  id: string;
  name: string;
  type: FolderType | ID;
  childNumber: number; // à minima, 0 ou 1...
}

//-------------------------------------
export interface IFilter {
//-------------------------------------
  id: BooleanFilterType | StringFilterType;
  defaultValue?: string | string[] | boolean | boolean[];
  values: StringFilterValue[];
}

//-------------------------------------
export interface IOrder {
//-------------------------------------
  id: OrderType;
  defaultValue?: "asc"|"desc";
  name: string;
}
  
//-------------------------------------
export interface IPagination { // TODO à tester
//-------------------------------------
  startIdx: number;
  maxIdx?: number;  // Si elastic search renvoie bien le nombre de hits 
  pageSize: number; // Sera égal à la valeur paramétrée côté serveur
}

//-------------------------------------
export interface IResource {
//-------------------------------------
  id: ID;
  name: string;
  thumbnail: URL;   // requis; ou bien déductible d’une convention ?
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
export interface IGroupUserRight {
//-------------------------------------
  read: boolean;
  contribute: boolean;
  manage: boolean;
  comment: boolean;
  userId?: ID;
  groupId?: ID;
}

export type FilterValues = {[B in BooleanFilterType]: boolean} & {[S in StringFilterType]: string} & {folder: ID};
export type OrderValues  = {  };

//------------------------- Service call results
export type GetResourcesResult = {
  folders: IFolder[];
  pagination: IPagination;
  resources: IResource[];
}
export type GetSubFoldersResult = {
  folders: IFolder[];
}
export type CreateFolderResult = {
  id: ID;
  name: string;
  type: FolderType;
  createdAt: string;
}
export type UpdateFolderResult = CreateFolderResult & {
  updatedAt: string;
  parentId: ID|"default";
}

//------------------------- API
//-------------------------------------
export interface IExplorerFramework {
//-------------------------------------
  /**
   * Instancie un contexte d'exploration .
   * @param types Types de ressources traitées par l'agent, minimum 1.
   * @param app [optionnel] Application à l'origine de l'appel.
   */
  createContext( types: ResourceType[], app?:App ): IExplorerContext;
  
  /**
   * Retrieve the underlying communication bus.
   */
  getBus(): IBus;
}

//-------------------------------------
export interface IExplorerContext {
//-------------------------------------
  isInitialized(): boolean;
  getContext(): IContext;
  getSearchParameters(): ISearchParameters;

  clear(): void;

  initialize(): Promise<IContext>;

  getResources(): Promise<GetResourcesResult>;

  getSubFolders( parentId:ID ): Promise<GetSubFoldersResult>;

  createFolder( resourceType:ResourceType, parentId:ID, name:string ): Promise<CreateFolderResult>;

  updateFolder( resourceType:ResourceType, parentId:ID, name:string ): Promise<UpdateFolderResult>;

  share( resourceIds:ID[], rights:IGroupUserRight[] ): void;

  copy( targetId:ID, resourceIds:ID[], folderIds:ID[] ): void;

  move( targetId:ID, resourceIds:ID[], folderIds:ID[] ): void;

  delete( resourceIds:ID[], folderIds:ID[] ): void; //FIXME 1 seul tableau en paramètres ?

/*//TODO ajouter des méthodes pour les autres actions du toaster ?
  CREATE:     "create"
 ,OPEN:       "open"
 ,MANAGE:     "manage"
 ,COMMENT:    "comment"
 ,EXPORT:     "export"
 ,PUBLISH:    "publish"
 ,PRINT:      "print"
*/
}

//-------------------------------------
export interface IBus {
//-------------------------------------
  /** App registered as "any" will manage Folders. */
  register( app:App, actions:ActionType[], agent:IBusAgent ): void;

  delegate( app:App, action:ActionType, parameters:any ): Observable<IActionResult>;
}

//-------------------------------------
export interface IBusAgent {
//-------------------------------------
  activate( app:App, action:ActionType, parameters:any ): Observable<IActionResult>;

// Ou bien, s'il y a besoin de dissocier agents et actions pour permettre plus d'interactions :
/*
  queryActivator( app:App, action:ActionType ): IActivator;
}
export interface IActivator {
  activate( parameters:any ): Observable<IActionResult>;
}
*/
}

//-------------------------------------
export interface IActionResult {
//-------------------------------------
  //TODO
}

//-------------------------------------
export interface IFolderAdapter extends IBusAgent {
//-------------------------------------

  getSubFolders( parentId: ID ): GetSubFoldersResult;

  createFolder( resourceType: ResourceType, parentId: ID, name: string ): CreateFolderResult;

  updateFolder( resourceType: ResourceType, parentId: ID, name: string ): UpdateFolderResult;

}

//TODO exemple d'adaptateur pour exploiter les Behaviours de Blog
//-------------------------------------
export interface IBlogAdapter extends IBusAgent {
//-------------------------------------

}
