[ode-ts-client](README.md) / Exports

# ode-ts-client

## Table of contents

### Classes

- [AbstractBusAgent](classes/abstractbusagent.md)
- [ExplorerFrameworkFactory](classes/explorerframeworkfactory.md)

### Interfaces

- [IAbstractBusAgent](interfaces/iabstractbusagent.md)
- [IAction](interfaces/iaction.md)
- [IActionParameters](interfaces/iactionparameters.md)
- [IActionResult](interfaces/iactionresult.md)
- [IBus](interfaces/ibus.md)
- [IBusAgent](interfaces/ibusagent.md)
- [IContext](interfaces/icontext.md)
- [IExplorerContext](interfaces/iexplorercontext.md)
- [IExplorerFramework](interfaces/iexplorerframework.md)
- [IFilter](interfaces/ifilter.md)
- [IFolder](interfaces/ifolder.md)
- [IGroupUserRight](interfaces/igroupuserright.md)
- [IOrder](interfaces/iorder.md)
- [IPagination](interfaces/ipagination.md)
- [IPreferences](interfaces/ipreferences.md)
- [IProperty](interfaces/iproperty.md)
- [IResource](interfaces/iresource.md)
- [ISearchParameters](interfaces/isearchparameters.md)
- [ISearchResults](interfaces/isearchresults.md)

### Type aliases

- [ActionType](modules.md#actiontype)
- [App](modules.md#app)
- [BooleanFilterType](modules.md#booleanfiltertype)
- [CreateFolderParameters](modules.md#createfolderparameters)
- [CreateFolderResult](modules.md#createfolderresult)
- [ErrorCode](modules.md#errorcode)
- [FilterValues](modules.md#filtervalues)
- [FolderType](modules.md#foldertype)
- [GetContextParameters](modules.md#getcontextparameters)
- [GetContextResult](modules.md#getcontextresult)
- [GetResourcesParameters](modules.md#getresourcesparameters)
- [GetResourcesResult](modules.md#getresourcesresult)
- [GetSubFoldersResult](modules.md#getsubfoldersresult)
- [ID](modules.md#id)
- [ManagePropertiesParameters](modules.md#managepropertiesparameters)
- [ManagePropertiesResult](modules.md#managepropertiesresult)
- [OrderValues](modules.md#ordervalues)
- [PropFormat](modules.md#propformat)
- [PropMode](modules.md#propmode)
- [PropType](modules.md#proptype)
- [ResourceType](modules.md#resourcetype)
- [SortByType](modules.md#sortbytype)
- [SortOrderType](modules.md#sortordertype)
- [StringFilterType](modules.md#stringfiltertype)
- [StringFilterValue](modules.md#stringfiltervalue)
- [UpdateFolderResult](modules.md#updatefolderresult)
- [UpdatePropertiesParameters](modules.md#updatepropertiesparameters)
- [UpdatePropertiesResult](modules.md#updatepropertiesresult)

### Variables

- [ACTION](modules.md#action)
- [APP](modules.md#app)
- [BOOLEAN\_FILTER](modules.md#boolean_filter)
- [ERROR\_CODE](modules.md#error_code)
- [FOLDER](modules.md#folder)
- [PROP\_FORMAT](modules.md#prop_format)
- [PROP\_MODE](modules.md#prop_mode)
- [PROP\_TYPE](modules.md#prop_type)
- [RESOURCE](modules.md#resource)
- [SORT\_BY](modules.md#sort_by)
- [SORT\_ORDER](modules.md#sort_order)
- [STRING\_FILTER](modules.md#string_filter)
- [appNameForResource](modules.md#appnameforresource)
- [framework](modules.md#framework)

## Type aliases

### ActionType

Ƭ **ActionType**: *typeof* [*ACTION*](modules.md#action)[keyof *typeof* [*ACTION*](modules.md#action)]

Defined in: [interfaces.ts:56](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L56)

___

### App

Ƭ **App**: *typeof* [*APP*](modules.md#app)[keyof *typeof* [*APP*](modules.md#app)]

Defined in: [interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L22)

___

### BooleanFilterType

Ƭ **BooleanFilterType**: *typeof* [*BOOLEAN\_FILTER*](modules.md#boolean_filter)[keyof *typeof* [*BOOLEAN\_FILTER*](modules.md#boolean_filter)]

Defined in: [interfaces.ts:72](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L72)

___

### CreateFolderParameters

Ƭ **CreateFolderParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `app`: [*App*](modules.md#app) ; `name`: *string* ; `parentId`: [*ID*](modules.md#id) \| *default* ; `type`: [*ResourceType*](modules.md#resourcetype)  }

Defined in: [interfaces.ts:243](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L243)

___

### CreateFolderResult

Ƭ **CreateFolderResult**: [*IActionResult*](interfaces/iactionresult.md) & [*IFolder*](interfaces/ifolder.md) & { `createdAt`: *string*  }

Defined in: [interfaces.ts:280](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L280)

___

### ErrorCode

Ƭ **ErrorCode**: *typeof* [*ERROR\_CODE*](modules.md#error_code)[keyof *typeof* [*ERROR\_CODE*](modules.md#error_code)]

Defined in: [interfaces.ts:13](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L13)

___

### FilterValues

Ƭ **FilterValues**: { [B in BooleanFilterType]?: boolean} & { [S in StringFilterType]?: string} & { `folder?`: [*ID*](modules.md#id)  }

Defined in: [interfaces.ts:263](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L263)

___

### FolderType

Ƭ **FolderType**: *typeof* [*FOLDER*](modules.md#folder)[keyof *typeof* [*FOLDER*](modules.md#folder)]

Defined in: [interfaces.ts:63](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L63)

___

### GetContextParameters

Ƭ **GetContextParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & [*ISearchParameters*](interfaces/isearchparameters.md)

Defined in: [interfaces.ts:241](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L241)

___

### GetContextResult

Ƭ **GetContextResult**: [*IActionResult*](interfaces/iactionresult.md) & [*IContext*](interfaces/icontext.md)

Defined in: [interfaces.ts:273](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L273)

___

### GetResourcesParameters

Ƭ **GetResourcesParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & [*ISearchParameters*](interfaces/isearchparameters.md)

Defined in: [interfaces.ts:242](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L242)

___

### GetResourcesResult

Ƭ **GetResourcesResult**: [*IActionResult*](interfaces/iactionresult.md) & [*ISearchResults*](interfaces/isearchresults.md)

Defined in: [interfaces.ts:275](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L275)

___

### GetSubFoldersResult

Ƭ **GetSubFoldersResult**: [*IActionResult*](interfaces/iactionresult.md) & { `folders`: [*IFolder*](interfaces/ifolder.md)[]  }

Defined in: [interfaces.ts:277](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L277)

___

### ID

Ƭ **ID**: *string*

Defined in: [interfaces.ts:106](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L106)

___

### ManagePropertiesParameters

Ƭ **ManagePropertiesParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `resources`: [*IResource*](interfaces/iresource.md)[]  }

Defined in: [interfaces.ts:249](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L249)

___

### ManagePropertiesResult

Ƭ **ManagePropertiesResult**: [*IActionResult*](interfaces/iactionresult.md) & { `properties`: [*IProperty*](interfaces/iproperty.md)[]  }

Defined in: [interfaces.ts:287](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L287)

___

### OrderValues

Ƭ **OrderValues**: { [O in SortByType]?: SortOrderType}

Defined in: [interfaces.ts:264](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L264)

___

### PropFormat

Ƭ **PropFormat**: *typeof* [*PROP\_FORMAT*](modules.md#prop_format)[keyof *typeof* [*PROP\_FORMAT*](modules.md#prop_format)]

Defined in: [interfaces.ts:130](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L130)

___

### PropMode

Ƭ **PropMode**: *typeof* [*PROP\_MODE*](modules.md#prop_mode)[keyof *typeof* [*PROP\_MODE*](modules.md#prop_mode)]

Defined in: [interfaces.ts:117](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L117)

___

### PropType

Ƭ **PropType**: *typeof* [*PROP\_TYPE*](modules.md#prop_type)[keyof *typeof* [*PROP\_TYPE*](modules.md#prop_type)]

Defined in: [interfaces.ts:125](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L125)

___

### ResourceType

Ƭ **ResourceType**: *typeof* [*RESOURCE*](modules.md#resource)[keyof *typeof* [*RESOURCE*](modules.md#resource)]

Defined in: [interfaces.ts:30](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L30)

___

### SortByType

Ƭ **SortByType**: *typeof* [*SORT\_BY*](modules.md#sort_by)[keyof *typeof* [*SORT\_BY*](modules.md#sort_by)]

Defined in: [interfaces.ts:103](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L103)

___

### SortOrderType

Ƭ **SortOrderType**: *typeof* [*SORT\_ORDER*](modules.md#sort_order)[keyof *typeof* [*SORT\_ORDER*](modules.md#sort_order)]

Defined in: [interfaces.ts:83](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L83)

___

### StringFilterType

Ƭ **StringFilterType**: *typeof* [*STRING\_FILTER*](modules.md#string_filter)[keyof *typeof* [*STRING\_FILTER*](modules.md#string_filter)]

Defined in: [interfaces.ts:76](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L76)

___

### StringFilterValue

Ƭ **StringFilterValue**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`i18n` | *string* |
`value` | *string* |

Defined in: [interfaces.ts:107](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L107)

___

### UpdateFolderResult

Ƭ **UpdateFolderResult**: [*CreateFolderResult*](modules.md#createfolderresult) & { `parentId`: [*ID*](modules.md#id) \| *default* ; `updatedAt`: *string*  }

Defined in: [interfaces.ts:283](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L283)

___

### UpdatePropertiesParameters

Ƭ **UpdatePropertiesParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `resources`: [*IResource*](interfaces/iresource.md)[]  }

Defined in: [interfaces.ts:250](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L250)

___

### UpdatePropertiesResult

Ƭ **UpdatePropertiesResult**: [*IActionResult*](interfaces/iactionresult.md) & { `resources`: [*IResource*](interfaces/iresource.md)[]  }

Defined in: [interfaces.ts:290](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L290)

## Variables

### ACTION

• `Const` **ACTION**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`COMMENT` | *comment* |
`COPY` | *copy* |
`CREATE` | *create* |
`DELETE` | *delete* |
`EXPORT` | *export* |
`INITIALIZE` | *initialize* |
`MANAGE` | *manage* |
`MOVE` | *move* |
`OPEN` | *open* |
`PRINT` | *print* |
`PUBLISH` | *publish* |
`SEARCH` | *search* |
`SHARE` | *share* |
`UPD_PROPS` | *properties* |

Defined in: [interfaces.ts:40](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L40)

___

### APP

• `Const` **APP**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BLOG` | *blog* |
`EXERCIZER` | *exercizer* |
`EXPLORER` | *explorer* |

Defined in: [interfaces.ts:16](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L16)

___

### BOOLEAN\_FILTER

• `Const` **BOOLEAN\_FILTER**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`FAVORITE` | *favorite* |
`OWNER` | *owner* |
`PUBLIC` | *public* |
`SHARED` | *shared* |

Defined in: [interfaces.ts:66](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L66)

___

### ERROR\_CODE

• `Const` **ERROR\_CODE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`AGENT_NOT_FOUND` | *0050* |
`APP_NOT_FOUND` | *0040* |
`NOT_INITIALIZED` | *0020* |
`NOT_SUPPORTED` | *0030* |
`SUCCESS` | *0000* |
`UNKNOWN` | *0010* |

Defined in: [interfaces.ts:5](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L5)

___

### FOLDER

• `Const` **FOLDER**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BIN` | *bin* |
`DEFAULT` | *default* |

Defined in: [interfaces.ts:59](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L59)

___

### PROP\_FORMAT

• `Const` **PROP\_FORMAT**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`PLAIN` | *plain* |

Defined in: [interfaces.ts:126](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L126)

___

### PROP\_MODE

• `Const` **PROP\_MODE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`READONLY` | *RO* |
`READWRITE` | *RW* |

Defined in: [interfaces.ts:113](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L113)

___

### PROP\_TYPE

• `Const` **PROP\_TYPE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`DATE` | *date* |
`IMAGE` | *image* |
`NUMBER` | *number* |
`TEXT` | *text* |

Defined in: [interfaces.ts:118](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L118)

___

### RESOURCE

• `Const` **RESOURCE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BLOG` | *blog* |
`EXERCISE` | *exercise* |
`FOLDER` | *folder* |

Defined in: [interfaces.ts:25](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L25)

___

### SORT\_BY

• `Const` **SORT\_BY**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`MODIFY_DATE` | *modifiedAt* |
`NAME` | *name* |
`VIEWS` | *views* |

Defined in: [interfaces.ts:84](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L84)

___

### SORT\_ORDER

• `Const` **SORT\_ORDER**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ASC` | *asc* |
`DESC` | *desc* |

Defined in: [interfaces.ts:79](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L79)

___

### STRING\_FILTER

• `Const` **STRING\_FILTER**: *object*

#### Type declaration:

Defined in: [interfaces.ts:73](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L73)

___

### appNameForResource

• `Const` **appNameForResource**: { [R in ResourceType]: App}

Defined in: [interfaces.ts:33](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L33)

___

### framework

• `Let` **framework**: [*IExplorerFramework*](interfaces/iexplorerframework.md)

The whole framework is a singleton.

Defined in: [foundation/ExplorerFramework.ts:39](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/ExplorerFramework.ts#L39)
