import {
  PublishParameters,
  PublishResult,
  GetContextParameters,
  GetContextResult,
  ISearchResults,
  CreateFolderParameters,
  MoveParameters,
  IActionResult,
  TrashParameters,
  CreateFolderResult,
  UpdateFolderParameters,
  ID,
  GetSubFoldersResult,
  DeleteParameters,
  ResourceType,
} from "..";
import { OdeServices } from "./OdeServices";

export abstract class ResourceService {
  //
  // STATIC REGISTRY
  //
  private static registry = new Map<
    string,
    (context: OdeServices) => ResourceService
  >();

  static register(
    {
      application,
      resourceType,
    }: { application: string; resourceType: string },
    service: (context: OdeServices) => ResourceService,
  ) {
    ResourceService.registry.set(`${application}:${resourceType}`, service);
  }
  static findService(
    {
      application,
      resourceType,
    }: { application: string; resourceType: string },
    context: OdeServices,
  ): ResourceService {
    const found = ResourceService.registry.get(
      `${application}:${resourceType}`,
    );
    if (found === undefined) {
      throw "Service not found: " + `${application}:${resourceType}`;
    }
    return found(context);
  }
  //
  // IMPLEMENTATION
  //
  constructor(protected context: OdeServices) {}

  protected get http() {
    return this.context.http();
  }
  //
  // ABSTRACT METHOD
  //
  abstract getApplication(): string;

  abstract getPrintUrl(resourceId: string, withComment?: boolean): string;

  abstract getViewUrl(resourceId: string): string;

  abstract getFormUrl(): string;

  abstract update(parameters: UpdateParameters): Promise<UpdateResult>;

  abstract getResourceType(): ResourceType;
  //
  // SHARED METHOD
  //
  gotoPrint(resourceId: string, withComment?: boolean): void {
    window.open(this.getPrintUrl(resourceId, withComment), "_blank");
  }

  gotoView(resourceId: string): void {
    window.open(this.getViewUrl(resourceId), "_self");
  }

  gotoForm() {
    window.open(this.getFormUrl(), "_self");
  }

  async publish(parameters: PublishParameters): Promise<PublishResult> {
    const publicationAsFormData = new FormData();
    publicationAsFormData.append("title", parameters.title);
    publicationAsFormData.append("cover", parameters.cover);
    publicationAsFormData.append("coverName", (parameters.cover as File).name);
    publicationAsFormData.append("coverType", parameters.cover.type);
    publicationAsFormData.append("teacherAvatar", parameters.teacherAvatar);
    publicationAsFormData.append(
      "teacherAvatarName",
      (parameters.teacherAvatar as File).name ||
        `teacherAvatar_${parameters.userId}`,
    );
    publicationAsFormData.append(
      "teacherAvatarType",
      parameters.teacherAvatar.type,
    );
    publicationAsFormData.append("language", parameters.language);
    parameters.activityType.forEach((activityType) => {
      publicationAsFormData.append("activityType[]", activityType);
    });
    parameters.subjectArea.forEach((subjectArea) => {
      publicationAsFormData.append("subjectArea[]", subjectArea);
    });
    parameters.age.forEach((age) => {
      publicationAsFormData.append("age[]", age.toString());
    });
    publicationAsFormData.append("description", parameters.description);
    let keyWordsArray = parameters.keyWords.split(",");
    keyWordsArray.forEach((keyWord) => {
      publicationAsFormData.append("keyWords[]", keyWord.trim());
    });
    publicationAsFormData.append("licence", parameters.licence);
    publicationAsFormData.append(
      "pdfUri",
      `${window.location.origin}${this.getPrintUrl(parameters.resourceId)}`,
    );
    publicationAsFormData.append(
      "application",
      parameters.application ? parameters.application : "",
    );
    publicationAsFormData.append("resourceId", parameters.resourceId);
    publicationAsFormData.append("teacherSchool", parameters.userStructureName);
    const res = await this.http.post<PublishResult>(
      "/appregistry/library/resource",
      publicationAsFormData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    return this.checkHttpResponse(res);
  }

  //
  // FOLDER METHODS
  //
  /** Create a search context. */
  async createContext(
    parameters: GetContextParameters,
  ): Promise<GetContextResult> {
    const result = await this.http.get<GetContextResult>("/explorer/context", {
      queryParams: this.toQueryParams(parameters),
    });
    return this.checkHttpResponse(result);
  }

  /** Search / paginate within a search context. */
  async searchContext(
    parameters: GetContextParameters,
  ): Promise<ISearchResults> {
    const result = await this.http.get<GetContextResult>(
      "/explorer/resources",
      {
        queryParams: this.toQueryParams(parameters),
      },
    );
    return this.checkHttpResponse(result);
  }

  /** Create a new folder. */
  async createFolder(
    parameters: CreateFolderParameters,
  ): Promise<CreateFolderResult> {
    const result = await this.http.post<CreateFolderResult>(
      "/explorer/folders",
      this.createFolderToBodyParams(parameters),
    );
    return this.checkHttpResponse(result);
  }

  /** Create a new folder. */
  async updateFolder(
    parameters: UpdateFolderParameters,
  ): Promise<CreateFolderResult> {
    const result = await this.http.put<CreateFolderResult>(
      `/explorer/folders/${parameters.folderId}`,
      this.createFolderToBodyParams(parameters),
    );
    return this.checkHttpResponse(result);
  }

  /** Move resources/folders to a folder. */
  async moveToFolder(parameters: MoveParameters): Promise<IActionResult> {
    const result = await this.http.post<IActionResult>(
      `/explorer/folders/${parameters.folderId}/move`,
      this.moveToBodyParams(parameters),
    );
    return this.checkHttpResponse(result);
  }

  /** List subfolders of a parent folder. */
  async listSubfolders(folderId: ID): Promise<GetSubFoldersResult> {
    const result = await this.http.get<GetSubFoldersResult>(
      `/explorer/folders/${folderId}/move`,
    );
    return this.checkHttpResponse(result);
  }

  /** Delete folders and/or resources. */
  async deleteFolders(parameters: DeleteParameters): Promise<IActionResult> {
    const result = await this.http.deleteJson<IActionResult>(
      `/explorer`,
      parameters,
    );
    return this.checkHttpResponse(result);
  }

  /** Trash folders and/or resources. */
  async trashFolders({
    trash,
    resourceType,
    ...parameters
  }: TrashParameters): Promise<IActionResult> {
    const result = await this.http.putJson<IActionResult>(
      `/explorer/${trash ? "trash" : "restore"}`,
      parameters,
    );
    return this.checkHttpResponse(result);
  }
  //
  // PROTECTED HELPERS
  //
  protected checkHttpResponse: <R>(result: R) => R = (result) => {
    if (this.http.latestResponse.status >= 300) {
      throw this.http.latestResponse.statusText;
    }
    return result;
  };

  protected async getThumbnailPath(thumb: string | Blob | File | undefined) {
    if (typeof thumb === "undefined") {
      return thumb;
    } else if (typeof thumb === "string") {
      if (thumb.startsWith("blob:")) {
        const blob = await fetch(thumb).then((r) => r.blob());
        const res = await this.context.workspace().saveFile(blob, {
          visibility: "protected",
          application: this.getApplication(),
        });
        return `/workspace/document/${res._id}`;
      } else {
        return thumb;
      }
    } else {
      const res = await this.context.workspace().saveFile(thumb, {
        visibility: "protected",
        application: this.getApplication(),
      });
      return `/workspace/document/${res._id}`;
    }
  }

  //
  // PRIVATE HELPERS
  //
  private toQueryParams(p: GetContextParameters): any {
    let ret = {
      application: p.app,
      start_idx: p.pagination.startIdx,
      page_size: p.pagination.pageSize,
      resource_type: p.types,
    } as any;
    if (p.orders) {
      ret.order_by = Object.entries(p.orders).map(
        (entry) => `${entry[0]}:${entry[1]}`,
      );
    }
    if (p.filters) {
      Object.assign(ret, p.filters);
    }
    if (typeof p.search === "string") {
      ret.search = p.search;
    }
    return ret;
  }
  private createFolderToBodyParams(p: CreateFolderParameters) {
    return {
      application: p.app,
      resourceType: p.type,
      parentId: p.parentId,
      name: p.name,
    };
  }
  private moveToBodyParams(p: MoveParameters) {
    return {
      application: p.application,
      resourceType: this.getResourceType(),
      resourceIds: p.resourceIds,
      folderIds: p.folderIds,
    };
  }
}

export interface UpdateParameters {
  entId: string;
  trashed: boolean;
  name: string;
  thumbnail: string | Blob | File;
  description: string;
  public: boolean;
  slug: string;
}

export interface UpdateResult {
  entId: string;
  thumbnail?: string;
}