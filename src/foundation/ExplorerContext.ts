import { CreateFolderResult, GetResourcesResult, GetSubFoldersResult, IContext, IExplorerContext, IGroupUserRight, ISearchParameters, ResourceType, UpdateFolderResult } from "../interfaces";

class ExplorerContext implements IExplorerContext {
    isInitialized(): boolean {
        throw new Error("Method not implemented.");
    }
    getContext(): IContext {
        throw new Error("Method not implemented.");
    }
    getSearchParameters(): ISearchParameters {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    initialize(): Promise<IContext> {
        throw new Error("Method not implemented.");
    }
    getResources(): Promise<GetResourcesResult> {
        throw new Error("Method not implemented.");
    }
    getSubFolders(parentId: string): Promise<GetSubFoldersResult> {
        throw new Error("Method not implemented.");
    }
    createFolder(resourceType: ResourceType, parentId: string, name: string): Promise<CreateFolderResult> {
        throw new Error("Method not implemented.");
    }
    updateFolder(resourceType: ResourceType, parentId: string, name: string): Promise<UpdateFolderResult> {
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

}