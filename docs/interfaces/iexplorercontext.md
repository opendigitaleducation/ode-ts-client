[ode-ts-client](../README.md) / [Exports](../modules.md) / IExplorerContext

# Interface: IExplorerContext

Context to explore resources from an application.

## Table of contents

### Methods

- [clear](iexplorercontext.md#clear)
- [copy](iexplorercontext.md#copy)
- [createFolder](iexplorercontext.md#createfolder)
- [delete](iexplorercontext.md#delete)
- [getContext](iexplorercontext.md#getcontext)
- [getResources](iexplorercontext.md#getresources)
- [getSearchParameters](iexplorercontext.md#getsearchparameters)
- [getSubFolders](iexplorercontext.md#getsubfolders)
- [initialize](iexplorercontext.md#initialize)
- [isInitialized](iexplorercontext.md#isinitialized)
- [latestResources](iexplorercontext.md#latestresources)
- [manageProperties](iexplorercontext.md#manageproperties)
- [move](iexplorercontext.md#move)
- [updateFolder](iexplorercontext.md#updatefolder)
- [updateProperties](iexplorercontext.md#updateproperties)

## Methods

### clear

▸ **clear**(): *void*

Clear and reset the underlying context.

**Returns:** *void*

Defined in: [explore/interfaces.ts:367](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L367)

___

### copy

▸ **copy**(`targetId`: *string*, `resourceIds`: *string*[], `folderIds`: *string*[]): *Promise*<void\>

Copy resources and folders into a folder.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`targetId` | *string* | ID of the destination folder.   |
`resourceIds` | *string*[] | Array of resources ID to copy.   |
`folderIds` | *string*[] | Array of folders ID to copy.    |

**Returns:** *Promise*<void\>

Defined in: [explore/interfaces.ts:413](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L413)

___

### createFolder

▸ **createFolder**(`resourceType`: [*ResourceType*](../modules.md#resourcetype), `parentId`: *string*, `name`: *string*): *Promise*<[*CreateFolderResult*](../modules.md#createfolderresult)\>

Create a new [sub]folder.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`resourceType` | [*ResourceType*](../modules.md#resourcetype) | Type of resources the created folder will contain.   |
`parentId` | *string* | ID of the parent folder, or "default" for the root folder.   |
`name` | *string* | Name of the created folder.    |

**Returns:** *Promise*<[*CreateFolderResult*](../modules.md#createfolderresult)\>

Defined in: [explore/interfaces.ts:396](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L396)

___

### delete

▸ **delete**(`resourceIds`: *string*[], `folderIds`: *string*[]): *Promise*<void\>

Delete resources and folders.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`resourceIds` | *string*[] | Array of resources ID to delete.   |
`folderIds` | *string*[] | Array of folders ID to delete.    |

**Returns:** *Promise*<void\>

Defined in: [explore/interfaces.ts:428](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L428)

___

### getContext

▸ **getContext**(): *undefined* \| [*IContext*](icontext.md)

**Returns:** *undefined* \| [*IContext*](icontext.md)

The initialized search context, or undefined if initialize() has not been called before.

Defined in: [explore/interfaces.ts:354](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L354)

___

### getResources

▸ **getResources**(): *Promise*<[*GetResourcesResult*](../modules.md#getresourcesresult)\>

Retrieve a page of listed resources from the server.
Observers of the latestResources() will be notified.
Search parameters can be adjusted beforehand, @see getSearchParameters().

**Returns:** *Promise*<[*GetResourcesResult*](../modules.md#getresourcesresult)\>

Defined in: [explore/interfaces.ts:382](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L382)

___

### getSearchParameters

▸ **getSearchParameters**(): [*ISearchParameters*](isearchparameters.md)

**Returns:** [*ISearchParameters*](isearchparameters.md)

search parameters in the current context, modifiable before any call to getResources() or initialize().

Defined in: [explore/interfaces.ts:358](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L358)

___

### getSubFolders

▸ **getSubFolders**(`parentId`: *string*): *Promise*<[*GetSubFoldersResult*](../modules.md#getsubfoldersresult)\>

Retrieve subfolders of a parent folder, from the server.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`parentId` | *string* | ID of the parent folder.    |

**Returns:** *Promise*<[*GetSubFoldersResult*](../modules.md#getsubfoldersresult)\>

Defined in: [explore/interfaces.ts:388](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L388)

___

### initialize

▸ **initialize**(): *Promise*<[*IContext*](icontext.md)\>

Retrieve the first page of listed resources from the server.
Observers of the latestResources() will be notified.
Search parameters can be adjusted beforehand, @see getSearchParameters().

**Returns:** *Promise*<[*IContext*](icontext.md)\>

Defined in: [explore/interfaces.ts:375](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L375)

___

### isInitialized

▸ **isInitialized**(): *boolean*

**Returns:** *boolean*

true, if the context is initialized.

Defined in: [explore/interfaces.ts:350](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L350)

___

### latestResources

▸ **latestResources**(): *Observable*<{ `input`: [*ISearchParameters*](isearchparameters.md) ; `output`: [*ISearchResults*](isearchresults.md)  }\>

**Returns:** *Observable*<{ `input`: [*ISearchParameters*](isearchparameters.md) ; `output`: [*ISearchResults*](isearchresults.md)  }\>

a flow of objects, generated by initialize() and getResources() which should be called by your searches or pagination.

Defined in: [explore/interfaces.ts:362](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L362)

___

### manageProperties

▸ **manageProperties**(`resourceType`: [*ResourceType*](../modules.md#resourcetype), `resources`: [*IResource*](iresource.md)[]): *Promise*<[*ManagePropertiesResult*](../modules.md#managepropertiesresult)\>

Retrieves which properties of the resource(s) are manageable.

#### Parameters:

Name | Type |
:------ | :------ |
`resourceType` | [*ResourceType*](../modules.md#resourcetype) |
`resources` | [*IResource*](iresource.md)[] |

**Returns:** *Promise*<[*ManagePropertiesResult*](../modules.md#managepropertiesresult)\>

Defined in: [explore/interfaces.ts:431](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L431)

___

### move

▸ **move**(`targetId`: *string*, `resourceIds`: *string*[], `folderIds`: *string*[]): *Promise*<void\>

Move resources and folders into a folder.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`targetId` | *string* | ID of the destination folder.   |
`resourceIds` | *string*[] | Array of resources ID to move.   |
`folderIds` | *string*[] | Array of folders ID to move.    |

**Returns:** *Promise*<void\>

Defined in: [explore/interfaces.ts:421](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L421)

___

### updateFolder

▸ **updateFolder**(`folderId`: *string*, `resourceType`: [*ResourceType*](../modules.md#resourcetype), `parentId`: *string*, `name`: *string*): *Promise*<[*UpdateFolderResult*](../modules.md#updatefolderresult)\>

Modify the properties of a folder.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`folderId` | *string* | ID of the folder to modify.   |
`resourceType` | [*ResourceType*](../modules.md#resourcetype) | Type of resources the modified folder will contain.   |
`parentId` | *string* | ID of the parent folder.   |
`name` | *string* | Name of the folder.    |

**Returns:** *Promise*<[*UpdateFolderResult*](../modules.md#updatefolderresult)\>

Defined in: [explore/interfaces.ts:405](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L405)

___

### updateProperties

▸ **updateProperties**(`resourceType`: [*ResourceType*](../modules.md#resourcetype), `resources`: [*IResource*](iresource.md)[], `props`: { `color`:  ; `description`:  ; `image`:  ; `title`:  ; `url`:   }): *Promise*<[*UpdatePropertiesResult*](../modules.md#updatepropertiesresult)\>

Update managed properties.

#### Parameters:

Name | Type |
:------ | :------ |
`resourceType` | [*ResourceType*](../modules.md#resourcetype) |
`resources` | [*IResource*](iresource.md)[] |
`props` | *object* |
`props.color` | - |
`props.description` | - |
`props.image` | - |
`props.title` | - |
`props.url` | - |

**Returns:** *Promise*<[*UpdatePropertiesResult*](../modules.md#updatepropertiesresult)\>

Defined in: [explore/interfaces.ts:433](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L433)
