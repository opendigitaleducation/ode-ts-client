//------------------------- Data types
//-- Applications
export const APP = {
  ANY:        "any"
 ,BLOG:       "blog"
 ,EXERCIZER:  "exercizer"
} as const;
export type App = typeof APP[keyof typeof APP];   // type App = "any" | "blog" | "exercizer"

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
  VISIBILITY: "visibility"
 ,FAVORITE:   "favorite"
 ,FOLDER:     "folder"
} as const;
export type FilterType = typeof FOLDER[keyof typeof FOLDER];

//-- Semantique
export type id = string;


//------------------------- Data models
//-- Folder
interface IFolder {
  id: string;
  name: string;
  type: FolderType | id;
  childNumber: number; // à minima, 0 ou 1...
}

//-- Filter
type FilterValue = {
  value: string|boolean,
  name: string
};
interface IFilter {
  id: FilterType;
  defaultValue?: string | boolean;
  values:FilterValue[]
}

//------------------------- Services


//------------------------- API

interface IExplorerFramework {
  
  createAgent( /*types: ResourceType[]|string, app?:App*/ ): IAgent;
  
}

interface IAgent {

  getContext( app: App, types )

}