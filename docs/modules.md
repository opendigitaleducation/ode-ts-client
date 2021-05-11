[ode-ts-client](README.md) / Exports

# ode-ts-client

## Table of contents

### Classes

- [AbstractBusAgent](classes/abstractbusagent.md)
- [BootstrappedNotice](classes/bootstrappednotice.md)
- [ConfigurationFrameworkFactory](classes/configurationframeworkfactory.md)
- [ExplorerFrameworkFactory](classes/explorerframeworkfactory.md)
- [LangChangedNotice](classes/langchangednotice.md)
- [NotifyFrameworkFactory](classes/notifyframeworkfactory.md)
- [TransportFrameworkFactory](classes/transportframeworkfactory.md)

### Interfaces

- [IAbstractBusAgent](interfaces/iabstractbusagent.md)
- [IAction](interfaces/iaction.md)
- [IActionParameters](interfaces/iactionparameters.md)
- [IActionResult](interfaces/iactionresult.md)
- [IBus](interfaces/ibus.md)
- [IBusAgent](interfaces/ibusagent.md)
- [IConfigurationFramework](interfaces/iconfigurationframework.md)
- [IContext](interfaces/icontext.md)
- [IExplorerContext](interfaces/iexplorercontext.md)
- [IExplorerFramework](interfaces/iexplorerframework.md)
- [IFilter](interfaces/ifilter.md)
- [IFolder](interfaces/ifolder.md)
- [IGlobal](interfaces/iglobal.md)
- [IHttp](interfaces/ihttp.md)
- [IIdiom](interfaces/iidiom.md)
- [IMe](interfaces/ime.md)
- [INotice](interfaces/inotice.md)
- [INotifyFramework](interfaces/inotifyframework.md)
- [IOrder](interfaces/iorder.md)
- [IPagination](interfaces/ipagination.md)
- [IPreferences](interfaces/ipreferences.md)
- [IProperty](interfaces/iproperty.md)
- [IResource](interfaces/iresource.md)
- [ISearchParameters](interfaces/isearchparameters.md)
- [ISearchResults](interfaces/isearchresults.md)
- [ITheme](interfaces/itheme.md)
- [ITransportFramework](interfaces/itransportframework.md)

### Type aliases

- [ActionType](modules.md#actiontype)
- [AddBundleCallback](modules.md#addbundlecallback)
- [App](modules.md#app)
- [BooleanFilterType](modules.md#booleanfiltertype)
- [CopyParameters](modules.md#copyparameters)
- [CreateFolderParameters](modules.md#createfolderparameters)
- [CreateFolderResult](modules.md#createfolderresult)
- [DeleteParameters](modules.md#deleteparameters)
- [ErrorCode](modules.md#errorcode)
- [EventName](modules.md#eventname)
- [FilterValues](modules.md#filtervalues)
- [FolderType](modules.md#foldertype)
- [GetContextParameters](modules.md#getcontextparameters)
- [GetContextResult](modules.md#getcontextresult)
- [GetResourcesParameters](modules.md#getresourcesparameters)
- [GetResourcesResult](modules.md#getresourcesresult)
- [GetSubFoldersResult](modules.md#getsubfoldersresult)
- [ID](modules.md#id)
- [IHttpParams](modules.md#ihttpparams)
- [IHttpResponse](modules.md#ihttpresponse)
- [ManagePropertiesParameters](modules.md#managepropertiesparameters)
- [ManagePropertiesResult](modules.md#managepropertiesresult)
- [MoveParameters](modules.md#moveparameters)
- [OrderValues](modules.md#ordervalues)
- [PropFormatType](modules.md#propformattype)
- [PropKeyType](modules.md#propkeytype)
- [PropModeType](modules.md#propmodetype)
- [PropTypeType](modules.md#proptypetype)
- [ResourceType](modules.md#resourcetype)
- [SortByType](modules.md#sortbytype)
- [SortOrderType](modules.md#sortordertype)
- [StringFilterType](modules.md#stringfiltertype)
- [StringFilterValue](modules.md#stringfiltervalue)
- [UpdateFolderParameters](modules.md#updatefolderparameters)
- [UpdateFolderResult](modules.md#updatefolderresult)
- [UpdatePropertiesParameters](modules.md#updatepropertiesparameters)
- [UpdatePropertiesResult](modules.md#updatepropertiesresult)

### Variables

- [ACTION](modules.md#action)
- [APP](modules.md#app)
- [BOOLEAN\_FILTER](modules.md#boolean_filter)
- [ERROR\_CODE](modules.md#error_code)
- [EVENT\_NAME](modules.md#event_name)
- [FOLDER](modules.md#folder)
- [PROP\_FORMAT](modules.md#prop_format)
- [PROP\_KEY](modules.md#prop_key)
- [PROP\_MODE](modules.md#prop_mode)
- [PROP\_TYPE](modules.md#prop_type)
- [RESOURCE](modules.md#resource)
- [SORT\_BY](modules.md#sort_by)
- [SORT\_ORDER](modules.md#sort_order)
- [STRING\_FILTER](modules.md#string_filter)
- [appNameForResource](modules.md#appnameforresource)
- [explorer](modules.md#explorer)

## Type aliases

### ActionType

Ƭ **ActionType**: *typeof* [*ACTION*](modules.md#action)[keyof *typeof* [*ACTION*](modules.md#action)]

Defined in: [explore/interfaces.ts:37](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L37)

___

### AddBundleCallback

Ƭ **AddBundleCallback**: () => *void* \| *Promise*<void\>

#### Type declaration:

▸ (): *void* \| *Promise*<void\>

**Returns:** *void* \| *Promise*<void\>

Defined in: [configure/interfaces.ts:14](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L14)

___

### App

Ƭ **App**: *typeof* [*APP*](modules.md#app)[keyof *typeof* [*APP*](modules.md#app)]

Defined in: [globals.ts:26](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/globals.ts#L26)

___

### BooleanFilterType

Ƭ **BooleanFilterType**: *typeof* [*BOOLEAN\_FILTER*](modules.md#boolean_filter)[keyof *typeof* [*BOOLEAN\_FILTER*](modules.md#boolean_filter)]

Defined in: [explore/interfaces.ts:53](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L53)

___

### CopyParameters

Ƭ **CopyParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `folderId`: [*ID*](modules.md#id) ; `folderIds`: [*ID*](modules.md#id)[] ; `resourceIds`: [*ID*](modules.md#id)[]  }

Defined in: [explore/interfaces.ts:259](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L259)

___

### CreateFolderParameters

Ƭ **CreateFolderParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `app`: [*App*](modules.md#app) ; `name`: *string* ; `parentId`: [*ID*](modules.md#id) \| *default* ; `type`: [*ResourceType*](modules.md#resourcetype)  }

Defined in: [explore/interfaces.ts:246](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L246)

___

### CreateFolderResult

Ƭ **CreateFolderResult**: [*IActionResult*](interfaces/iactionresult.md) & [*IFolder*](interfaces/ifolder.md) & { `createdAt`: *string*  }

Defined in: [explore/interfaces.ts:307](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L307)

___

### DeleteParameters

Ƭ **DeleteParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `folderIds`: [*ID*](modules.md#id)[] ; `resourceIds`: [*ID*](modules.md#id)[]  }

Defined in: [explore/interfaces.ts:269](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L269)

___

### ErrorCode

Ƭ **ErrorCode**: *typeof* [*ERROR\_CODE*](modules.md#error_code)[keyof *typeof* [*ERROR\_CODE*](modules.md#error_code)]

Defined in: [globals.ts:17](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/globals.ts#L17)

___

### EventName

Ƭ **EventName**: *typeof* [*EVENT\_NAME*](modules.md#event_name)[keyof *typeof* [*EVENT\_NAME*](modules.md#event_name)]

Defined in: [notify/interfaces.ts:7](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/notify/interfaces.ts#L7)

___

### FilterValues

Ƭ **FilterValues**: { [B in BooleanFilterType]?: boolean} & { [S in StringFilterType]?: string} & { `folder?`: [*ID*](modules.md#id)  }

Defined in: [explore/interfaces.ts:292](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L292)

___

### FolderType

Ƭ **FolderType**: *typeof* [*FOLDER*](modules.md#folder)[keyof *typeof* [*FOLDER*](modules.md#folder)]

Defined in: [explore/interfaces.ts:44](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L44)

___

### GetContextParameters

Ƭ **GetContextParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & [*ISearchParameters*](interfaces/isearchparameters.md)

Defined in: [explore/interfaces.ts:244](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L244)

___

### GetContextResult

Ƭ **GetContextResult**: [*IActionResult*](interfaces/iactionresult.md) & [*IContext*](interfaces/icontext.md)

Defined in: [explore/interfaces.ts:302](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L302)

___

### GetResourcesParameters

Ƭ **GetResourcesParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & [*ISearchParameters*](interfaces/isearchparameters.md)

Defined in: [explore/interfaces.ts:245](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L245)

___

### GetResourcesResult

Ƭ **GetResourcesResult**: [*IActionResult*](interfaces/iactionresult.md) & [*ISearchResults*](interfaces/isearchresults.md)

Defined in: [explore/interfaces.ts:304](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L304)

___

### GetSubFoldersResult

Ƭ **GetSubFoldersResult**: [*IActionResult*](interfaces/iactionresult.md) & { `folders`: [*IFolder*](interfaces/ifolder.md)[]  }

Defined in: [explore/interfaces.ts:306](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L306)

___

### ID

Ƭ **ID**: *string*

Defined in: [explore/interfaces.ts:87](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L87)

___

### IHttpParams

Ƭ **IHttpParams**: *object*

#### Type declaration:

Defined in: [transport/interfaces.ts:1](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L1)

___

### IHttpResponse

Ƭ **IHttpResponse**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`headers`? | *any* |
`status` | *number* |
`statusText` | *string* |

Defined in: [transport/interfaces.ts:2](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L2)

___

### ManagePropertiesParameters

Ƭ **ManagePropertiesParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `resources`: [*IResource*](interfaces/iresource.md)[]  }

Defined in: [explore/interfaces.ts:273](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L273)

___

### ManagePropertiesResult

Ƭ **ManagePropertiesResult**: [*IActionResult*](interfaces/iactionresult.md) & { `genericProps`: [*IProperty*](interfaces/iproperty.md)[]  }

Defined in: [explore/interfaces.ts:312](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L312)

___

### MoveParameters

Ƭ **MoveParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `folderId`: [*ID*](modules.md#id) ; `folderIds`: [*ID*](modules.md#id)[] ; `resourceIds`: [*ID*](modules.md#id)[]  }

Defined in: [explore/interfaces.ts:264](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L264)

___

### OrderValues

Ƭ **OrderValues**: { [O in SortByType]?: SortOrderType}

Defined in: [explore/interfaces.ts:293](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L293)

___

### PropFormatType

Ƭ **PropFormatType**: *typeof* [*PROP\_FORMAT*](modules.md#prop_format)[keyof *typeof* [*PROP\_FORMAT*](modules.md#prop_format)]

Defined in: [explore/interfaces.ts:123](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L123)

___

### PropKeyType

Ƭ **PropKeyType**: *typeof* [*PROP\_KEY*](modules.md#prop_key)[keyof *typeof* [*PROP\_KEY*](modules.md#prop_key)]

Defined in: [explore/interfaces.ts:102](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L102)

___

### PropModeType

Ƭ **PropModeType**: *typeof* [*PROP\_MODE*](modules.md#prop_mode)[keyof *typeof* [*PROP\_MODE*](modules.md#prop_mode)]

Defined in: [explore/interfaces.ts:108](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L108)

___

### PropTypeType

Ƭ **PropTypeType**: *typeof* [*PROP\_TYPE*](modules.md#prop_type)[keyof *typeof* [*PROP\_TYPE*](modules.md#prop_type)]

Defined in: [explore/interfaces.ts:117](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L117)

___

### ResourceType

Ƭ **ResourceType**: *typeof* [*RESOURCE*](modules.md#resource)[keyof *typeof* [*RESOURCE*](modules.md#resource)]

Defined in: [explore/interfaces.ts:11](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L11)

___

### SortByType

Ƭ **SortByType**: *typeof* [*SORT\_BY*](modules.md#sort_by)[keyof *typeof* [*SORT\_BY*](modules.md#sort_by)]

Defined in: [explore/interfaces.ts:84](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L84)

___

### SortOrderType

Ƭ **SortOrderType**: *typeof* [*SORT\_ORDER*](modules.md#sort_order)[keyof *typeof* [*SORT\_ORDER*](modules.md#sort_order)]

Defined in: [explore/interfaces.ts:64](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L64)

___

### StringFilterType

Ƭ **StringFilterType**: *typeof* [*STRING\_FILTER*](modules.md#string_filter)[keyof *typeof* [*STRING\_FILTER*](modules.md#string_filter)]

Defined in: [explore/interfaces.ts:57](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L57)

___

### StringFilterValue

Ƭ **StringFilterValue**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`i18n` | *string* |
`value` | *string* |

Defined in: [explore/interfaces.ts:88](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L88)

___

### UpdateFolderParameters

Ƭ **UpdateFolderParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `app`: [*App*](modules.md#app) ; `folderId`: [*ID*](modules.md#id) ; `name`: *string* ; `parentId`: [*ID*](modules.md#id) \| *default* ; `type`: [*ResourceType*](modules.md#resourcetype)  }

Defined in: [explore/interfaces.ts:252](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L252)

___

### UpdateFolderResult

Ƭ **UpdateFolderResult**: [*CreateFolderResult*](modules.md#createfolderresult) & { `parentId`: [*ID*](modules.md#id) \| *default* ; `updatedAt`: *string*  }

Defined in: [explore/interfaces.ts:308](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L308)

___

### UpdatePropertiesParameters

Ƭ **UpdatePropertiesParameters**: [*IActionParameters*](interfaces/iactionparameters.md) & { `props`: { [key in PropKeyType]?: string} ; `resources`: [*IResource*](interfaces/iresource.md)[]  }

Defined in: [explore/interfaces.ts:274](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L274)

___

### UpdatePropertiesResult

Ƭ **UpdatePropertiesResult**: [*IActionResult*](interfaces/iactionresult.md) & { `resources`: [*IResource*](interfaces/iresource.md)[]  }

Defined in: [explore/interfaces.ts:313](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L313)

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

Defined in: [explore/interfaces.ts:21](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L21)

___

### APP

• `Const` **APP**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BLOG` | *blog* |
`EXERCIZER` | *exercizer* |
`EXPLORER` | *explorer* |

Defined in: [globals.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/globals.ts#L20)

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

Defined in: [explore/interfaces.ts:47](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L47)

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
`TIME_OUT` | *0070* |
`TRANSPORT_ERROR` | *0060* |
`UNKNOWN` | *0010* |

Defined in: [globals.ts:7](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/globals.ts#L7)

___

### EVENT\_NAME

• `Const` **EVENT\_NAME**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BOOTSTRAPPED` | *bootstrapped* |
`LANG_CHANGED` | *langChanged* |

Defined in: [notify/interfaces.ts:3](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/notify/interfaces.ts#L3)

___

### FOLDER

• `Const` **FOLDER**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BIN` | *bin* |
`DEFAULT` | *default* |

Defined in: [explore/interfaces.ts:40](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L40)

___

### PROP\_FORMAT

• `Const` **PROP\_FORMAT**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`PLAIN` | *plain* |

Defined in: [explore/interfaces.ts:119](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L119)

___

### PROP\_KEY

• `Const` **PROP\_KEY**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`COLOR` | *color* |
`DESCRIPTION` | *description* |
`IMAGE` | *image* |
`TITLE` | *title* |
`URL` | *url* |

Defined in: [explore/interfaces.ts:94](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L94)

___

### PROP\_MODE

• `Const` **PROP\_MODE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`READONLY` | *RO* |
`READWRITE` | *RW* |

Defined in: [explore/interfaces.ts:104](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L104)

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

Defined in: [explore/interfaces.ts:110](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L110)

___

### RESOURCE

• `Const` **RESOURCE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`BLOG` | *blog* |
`EXERCISE` | *exercise* |
`FOLDER` | *folder* |

Defined in: [explore/interfaces.ts:6](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L6)

___

### SORT\_BY

• `Const` **SORT\_BY**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`MODIFY_DATE` | *modifiedAt* |
`NAME` | *name* |
`VIEWS` | *views* |

Defined in: [explore/interfaces.ts:65](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L65)

___

### SORT\_ORDER

• `Const` **SORT\_ORDER**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ASC` | *asc* |
`DESC` | *desc* |

Defined in: [explore/interfaces.ts:60](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L60)

___

### STRING\_FILTER

• `Const` **STRING\_FILTER**: *object*

#### Type declaration:

Defined in: [explore/interfaces.ts:54](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L54)

___

### appNameForResource

• `Const` **appNameForResource**: { [R in ResourceType]: App}

Defined in: [explore/interfaces.ts:14](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L14)

___

### explorer

• `Const` **explorer**: [*IExplorerFramework*](interfaces/iexplorerframework.md)

The whole framework is a singleton.

Defined in: [explore/Framework.ts:40](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Framework.ts#L40)
