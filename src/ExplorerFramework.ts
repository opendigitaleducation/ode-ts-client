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
export const FILTER = {
  OWNER:      "owner"
 ,SHARED:     "shared"
 ,PUBLIC:     "public"
 ,FAVORITE:   "favorite"
 ,FOLDER:     "folder"
} as const;
export type FilterType = typeof FILTER[keyof typeof FILTER];

//-- Orders 
export const ORDER = {
  NAME:         "name"
 ,MODIFY_DATE:  "modifiedAt"
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
  views?: number;
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
  for( const filter of Object.values(FILTER) ) {
    
  }
}

//------------------------- Data models 
//-------------------------------------
interface IContext {
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
interface IAction {
//-------------------------------------
  id: ActionType,
  available: boolean  // L'utilisateur a le droit workflow ou pas
  //FIXME comment relier les actions aux behaviours, qu'on va remplacer.
}

//-------------------------------------
interface IFolder {
//-------------------------------------
  id: string;
  name: string;
  type: FolderType | ID;
  childNumber: number; // à minima, 0 ou 1...
}

//-------------------------------------
interface IFilter {
//-------------------------------------
  id: FilterType;
  defaultValue?: string | string[] | boolean | boolean[];
  values: StringFilterValue[];
}

//-------------------------------------
interface IOrder {
//-------------------------------------
  id: OrderType;
  defaultValue?: "asc"|"desc";
  name: string;
}
  
  //-------------------------------------
interface IPagination { // TODO à tester
//-------------------------------------
  startIdx: number;
  maxIdx?: number;  // Si elastic search renvoie bien le nombre de hits 
  pageSize: number; // Sera égal à la valeur paramétrée côté serveur
}

//-------------------------------------
interface IResource {
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
interface IPreferences {
//-------------------------------------
  view: "card"|"list";
}

//-------------------------------------
interface IGroupUserRight {
//-------------------------------------
  read: boolean;
  contribute: boolean;
  manage: boolean;
  comment: boolean;
  userId?: ID;
  groupId?: ID;
}

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
interface IExplorerFramework {
//-------------------------------------
  /**
   * Instancie un agent délégué au traitement des tâches d'exploration.
   * @param types Types de ressources traitées par l'agent, minimum 1.
   * @param app [optionnel] Application délégante.
   */
  createAgent( types: ResourceType[], app?:App ): IAgent;
  
}

//-------------------------------------
interface IAgent {
//-------------------------------------

  getContext( /* Paramètres de l'agent */ ): IContext;

  getResources( /* Paramètres trouvés dans le Context */ ): GetResourcesResult;

  getSubFolders( parentId: ID ): GetSubFoldersResult;

  createFolder( resourceType: ResourceType, parentId: ID, name: string ): CreateFolderResult;

  updateFolder( resourceType: ResourceType, parentId: ID, name: string ): UpdateFolderResult;

  share( resourceIds: ID[], rights: IGroupUserRight[] ): void;

  copy( targetId: ID, resourceIds: ID[], folderIds: ID[] ): void;

  move( targetId: ID, resourceIds: ID[], folderIds: ID[] ): void;

  delete( resourceIds: ID[], folderIds: ID[] ): void; //FIXME 1 seul tableau en paramètres ?

}
