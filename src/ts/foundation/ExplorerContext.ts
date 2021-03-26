import { Observable, Subject } from "rxjs";
import { App, IContext, IExplorerContext, ISearchParameters, ResourceType, ERROR_CODE, IBus, ACTION, GetResourcesResult, GetSubFoldersResult, CreateFolderResult, UpdateFolderResult, IGroupUserRight, ExplorerFrameworkFactory, GetContextResult, RESOURCE, CreateFolderParameters, ID, ISearchResults, IResource, ManagePropertiesResult, ManagePropertiesParameters, UpdatePropertiesResult, UpdatePropertiesParameters } from "../interfaces";

export class ExplorerContext implements IExplorerContext {
    private searchParameters: ISearchParameters;
    private context: IContext | null;
    private bus:IBus;
    private latestResults:Subject<ISearchResults> = new Subject();

    constructor( types:ResourceType[], app:App ) {
        this.context = null;
        this.bus = ExplorerFrameworkFactory.instance.getBus();
        
        this.searchParameters = {
            types: types,
            app: app,
            filters: {},
            pagination: {
                startIdx: 0,
                pageSize: 20
            }
        }
    }

    clear(): void {
        this.searchParameters.filters = {
            owner: true,
            shared: true,
            public: true
        };
        this.searchParameters.pagination.startIdx = 0;
        this.searchParameters.pagination.pageSize = 20;
        this.context = null;
    }
    isInitialized(): boolean {
        return this.context!==null;
    }
    getContext(): IContext|undefined {
        if( this.context!==null ) {
            return this.context;
        }
    }
    getSearchParameters(): ISearchParameters {
        return this.searchParameters;
    }
    
    latestResources():Observable<ISearchResults> {
        return this.latestResults.asObservable();
    }

    initialize(): Promise<IContext> {
        // Using Promise.resolve().then() allows the use of .catch(), .finally() and is considered a good practice.
        return Promise.resolve()
        .then( () => this.bus.send(RESOURCE.FOLDER, ACTION.INITIALIZE, this.searchParameters) )
        .then( (ar) => {
            this.context = ar as GetContextResult;
            // TODO data sanity check
            if( !this.context ) {
                throw new Error( ERROR_CODE.UNKNOWN );
            }
            // Publish this results for listeners.
            this.latestResults.next(this.context);
            return this.context;
        });
    }
    getResources(): Promise<GetResourcesResult> {
        return this.bus.send( RESOURCE.FOLDER, ACTION.SEARCH, this.searchParameters )
        .then( (ar) => {
            let result = ar as GetResourcesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            // Publish this results for listeners.
            this.latestResults.next(result);
            return result;
        });
    }
    getSubFolders(parentId: string): Promise<GetSubFoldersResult> {
        throw new Error("Method not implemented.");
    }
    createFolder(resourceType: ResourceType, parentId: string, name: string): Promise<CreateFolderResult> {
        const createParameters:CreateFolderParameters = {
            app: this.searchParameters.app,
            name: name,
            parentId: parentId,
            type: resourceType
        };
        return this.bus.send( RESOURCE.FOLDER, ACTION.CREATE, createParameters )
        .then( (ar) => {
            let result = ar as CreateFolderResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    updateFolder( folderId:ID, resourceType: ResourceType, parentId:ID|"default", name: string): Promise<UpdateFolderResult> {
        throw new Error("Method not implemented.");
    }
    share(resourceIds: string[], rights: IGroupUserRight[]): void {
        throw new Error("Method not implemented.");
    }
    copy(targetId: string, resourceIds: string[], folderIds: string[]): void {
        throw new Error("Method not implemented.");
    }
    move(targetId: string, resourceIds: string[], folderIds: string[]): void {
        throw new Error("Method not implemented.");
    }
    delete(resourceIds: string[], folderIds: string[]): void {
        throw new Error("Method not implemented.");
    }
    manageProperties(resourceType:ResourceType, resources:IResource[]): Promise<ManagePropertiesResult> {
        const params:ManagePropertiesParameters = { resources:resources };
        return this.bus.send( resourceType, ACTION.MANAGE, params )
        .then( (ar) => {
            let result = ar as ManagePropertiesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
    updateProperties(resourceType:ResourceType, resources:IResource[]): Promise<UpdatePropertiesResult> {
        const params:UpdatePropertiesParameters = { resources:resources };
        return this.bus.send( resourceType, ACTION.MANAGE, params )
        .then( (ar) => {
            let result = ar as UpdatePropertiesResult;
            // TODO data sanity check
            if( !result )
                throw new Error( ERROR_CODE.UNKNOWN );
            return result;
        });
    }
}