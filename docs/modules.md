[ode-ts-client](README.md) / Exports

# ode-ts-client

## Table of contents

### Classes

- [AbstractBusAgent](classes/abstractbusagent.md)
- [ConfigurationFrameworkFactory](classes/configurationframeworkfactory.md)
- [ExplorerFrameworkFactory](classes/explorerframeworkfactory.md)
- [INotifyFramework](classes/inotifyframework.md)
- [ITimelineFactory](classes/itimelinefactory.md)
- [LastInfosWidget](classes/lastinfoswidget.md)
- [NotifyFrameworkFactory](classes/notifyframeworkfactory.md)
- [SessionFrameworkFactory](classes/sessionframeworkfactory.md)
- [TransportFrameworkFactory](classes/transportframeworkfactory.md)
- [WidgetFrameworkFactory](classes/widgetframeworkfactory.md)

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
- [IFlashMessageModel](interfaces/iflashmessagemodel.md)
- [IFolder](interfaces/ifolder.md)
- [IHttp](interfaces/ihttp.md)
- [IIdiom](interfaces/iidiom.md)
- [ILastInfosModel](interfaces/ilastinfosmodel.md)
- [IMatomoTrackingParams](interfaces/imatomotrackingparams.md)
- [IOrder](interfaces/iorder.md)
- [IPagination](interfaces/ipagination.md)
- [IPreferences](interfaces/ipreferences.md)
- [IPromisified](interfaces/ipromisified.md)
- [IProperty](interfaces/iproperty.md)
- [IResource](interfaces/iresource.md)
- [ISearchParameters](interfaces/isearchparameters.md)
- [ISearchResults](interfaces/isearchresults.md)
- [ISession](interfaces/isession.md)
- [ISessionFramework](interfaces/isessionframework.md)
- [ITheme](interfaces/itheme.md)
- [IThemeConf](interfaces/ithemeconf.md)
- [IThemeConfOverriding](interfaces/ithemeconfoverriding.md)
- [IThemeDesc](interfaces/ithemedesc.md)
- [ITimelineApp](interfaces/itimelineapp.md)
- [ITimelineNotification](interfaces/itimelinenotification.md)
- [ITrackingParams](interfaces/itrackingparams.md)
- [ITransportFramework](interfaces/itransportframework.md)
- [IUserDescription](interfaces/iuserdescription.md)
- [IUserInfo](interfaces/iuserinfo.md)
- [IUserPreferences](interfaces/iuserpreferences.md)
- [IWebApp](interfaces/iwebapp.md)
- [IWidget](interfaces/iwidget.md)
- [IWidgetFramework](interfaces/iwidgetframework.md)
- [IWidgetModel](interfaces/iwidgetmodel.md)
- [IWorkflowAuth](interfaces/iworkflowauth.md)
- [Recipient](interfaces/recipient.md)

### Type aliases

- [ActionType](modules.md#actiontype)
- [AddBundleCallback](modules.md#addbundlecallback)
- [AnalyticStatus](modules.md#analyticstatus)
- [App](modules.md#app)
- [BooleanFilterType](modules.md#booleanfiltertype)
- [CopyParameters](modules.md#copyparameters)
- [CreateFolderParameters](modules.md#createfolderparameters)
- [CreateFolderResult](modules.md#createfolderresult)
- [DeleteParameters](modules.md#deleteparameters)
- [ErrorCode](modules.md#errorcode)
- [FilterValues](modules.md#filtervalues)
- [FolderType](modules.md#foldertype)
- [GetContextParameters](modules.md#getcontextparameters)
- [GetContextResult](modules.md#getcontextresult)
- [GetResourcesParameters](modules.md#getresourcesparameters)
- [GetResourcesResult](modules.md#getresourcesresult)
- [GetSubFoldersResult](modules.md#getsubfoldersresult)
- [Hobby](modules.md#hobby)
- [ID](modules.md#id)
- [IHttpParams](modules.md#ihttpparams)
- [IHttpResponse](modules.md#ihttpresponse)
- [IThemeOverrides](modules.md#ithemeoverrides)
- [ManagePropertiesParameters](modules.md#managepropertiesparameters)
- [ManagePropertiesResult](modules.md#managepropertiesresult)
- [MoveParameters](modules.md#moveparameters)
- [NotificationModel](modules.md#notificationmodel)
- [OrderValues](modules.md#ordervalues)
- [PropFormatType](modules.md#propformattype)
- [PropKeyType](modules.md#propkeytype)
- [PropModeType](modules.md#propmodetype)
- [PropTypeType](modules.md#proptypetype)
- [ResourceType](modules.md#resourcetype)
- [Shool](modules.md#shool)
- [SortByType](modules.md#sortbytype)
- [SortOrderType](modules.md#sortordertype)
- [StringFilterType](modules.md#stringfiltertype)
- [StringFilterValue](modules.md#stringfiltervalue)
- [TrackingType](modules.md#trackingtype)
- [UpdateFolderParameters](modules.md#updatefolderparameters)
- [UpdateFolderResult](modules.md#updatefolderresult)
- [UpdatePropertiesParameters](modules.md#updatepropertiesparameters)
- [UpdatePropertiesResult](modules.md#updatepropertiesresult)
- [UserPreferenceKey](modules.md#userpreferencekey)
- [WidgetName](modules.md#widgetname)
- [WidgetPosition](modules.md#widgetposition)
- [WidgetUserPref](modules.md#widgetuserpref)

### Variables

- [ACTION](modules.md#action)
- [APP](modules.md#app)
- [BOOLEAN\_FILTER](modules.md#boolean_filter)
- [ERROR\_CODE](modules.md#error_code)
- [FOLDER](modules.md#folder)
- [PROP\_FORMAT](modules.md#prop_format)
- [PROP\_KEY](modules.md#prop_key)
- [PROP\_MODE](modules.md#prop_mode)
- [PROP\_TYPE](modules.md#prop_type)
- [RESOURCE](modules.md#resource)
- [SORT\_BY](modules.md#sort_by)
- [SORT\_ORDER](modules.md#sort_order)
- [STRING\_FILTER](modules.md#string_filter)
- [WIDGET\_NAME](modules.md#widget_name)
- [WIDGET\_POSITION](modules.md#widget_position)
- [appNameForResource](modules.md#appnameforresource)
- [explorer](modules.md#explorer)

## Type aliases

### ActionType

Ƭ **ActionType**: typeof [ACTION](modules.md#action)[keyof typeof [ACTION](modules.md#action)]

#### Defined in

[explore/interfaces.ts:169](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L169)

___

### AddBundleCallback

Ƭ **AddBundleCallback**: () => `void` \| `Promise`<void\>

#### Type declaration

▸ (): `void` \| `Promise`<void\>

##### Returns

`void` \| `Promise`<void\>

#### Defined in

[configure/interfaces.ts:146](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L146)

___

### AnalyticStatus

Ƭ **AnalyticStatus**: ``"void"`` \| ``"pending"`` \| ``"ready"`` \| ``"failed"``

#### Defined in

[configure/interfaces.ts:54](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L54)

___

### App

Ƭ **App**: typeof [APP](modules.md#app)[keyof typeof [APP](modules.md#app)]

#### Defined in

[globals.ts:28](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/globals.ts#L28)

___

### BooleanFilterType

Ƭ **BooleanFilterType**: typeof [BOOLEAN\_FILTER](modules.md#boolean_filter)[keyof typeof [BOOLEAN\_FILTER](modules.md#boolean_filter)]

#### Defined in

[explore/interfaces.ts:185](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L185)

___

### CopyParameters

Ƭ **CopyParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `folderId`: [ID](modules.md#id) ; `folderIds`: [ID](modules.md#id)[] ; `resourceIds`: [ID](modules.md#id)[]  }

#### Defined in

[explore/interfaces.ts:391](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L391)

___

### CreateFolderParameters

Ƭ **CreateFolderParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `app`: [App](modules.md#app) ; `name`: `string` ; `parentId`: [ID](modules.md#id) \| ``"default"`` ; `type`: [ResourceType](modules.md#resourcetype)  }

#### Defined in

[explore/interfaces.ts:378](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L378)

___

### CreateFolderResult

Ƭ **CreateFolderResult**: [IActionResult](interfaces/iactionresult.md) & [IFolder](interfaces/ifolder.md) & { `createdAt`: `string`  }

#### Defined in

[explore/interfaces.ts:439](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L439)

___

### DeleteParameters

Ƭ **DeleteParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `folderIds`: [ID](modules.md#id)[] ; `resourceIds`: [ID](modules.md#id)[]  }

#### Defined in

[explore/interfaces.ts:401](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L401)

___

### ErrorCode

Ƭ **ErrorCode**: typeof [ERROR\_CODE](modules.md#error_code)[keyof typeof [ERROR\_CODE](modules.md#error_code)]

#### Defined in

[globals.ts:17](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/globals.ts#L17)

___

### FilterValues

Ƭ **FilterValues**: { [B in BooleanFilterType]?: boolean} & { [S in StringFilterType]?: string} & { `folder?`: [ID](modules.md#id)  }

#### Defined in

[explore/interfaces.ts:424](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L424)

___

### FolderType

Ƭ **FolderType**: typeof [FOLDER](modules.md#folder)[keyof typeof [FOLDER](modules.md#folder)]

#### Defined in

[explore/interfaces.ts:176](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L176)

___

### GetContextParameters

Ƭ **GetContextParameters**: [IActionParameters](interfaces/iactionparameters.md) & [ISearchParameters](interfaces/isearchparameters.md)

#### Defined in

[explore/interfaces.ts:376](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L376)

___

### GetContextResult

Ƭ **GetContextResult**: [IActionResult](interfaces/iactionresult.md) & [IContext](interfaces/icontext.md)

#### Defined in

[explore/interfaces.ts:434](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L434)

___

### GetResourcesParameters

Ƭ **GetResourcesParameters**: [IActionParameters](interfaces/iactionparameters.md) & [ISearchParameters](interfaces/isearchparameters.md)

#### Defined in

[explore/interfaces.ts:377](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L377)

___

### GetResourcesResult

Ƭ **GetResourcesResult**: [IActionResult](interfaces/iactionresult.md) & [ISearchResults](interfaces/isearchresults.md)

#### Defined in

[explore/interfaces.ts:436](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L436)

___

### GetSubFoldersResult

Ƭ **GetSubFoldersResult**: [IActionResult](interfaces/iactionresult.md) & { `folders`: [IFolder](interfaces/ifolder.md)[]  }

#### Defined in

[explore/interfaces.ts:438](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L438)

___

### Hobby

Ƭ **Hobby**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `category` | ``"sport"`` \| ``"cinema"`` \| ``"animals"`` \| ``"music"`` \| ``"places"`` \| ``"books"`` |
| `values` | `string` |
| `visibility` | ``"PRIVE"`` \| ``"PUBLIC"`` |

#### Defined in

[session/interfaces.ts:31](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L31)

___

### ID

Ƭ **ID**: `string`

#### Defined in

[explore/interfaces.ts:219](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L219)

___

### IHttpParams

Ƭ **IHttpParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableNotifications?` | `boolean` | Set to true to prevent sending notifications. |
| `headers?` | `Object` | HTTP headers to apply to the request. |
| `queryParams?` | `Object` | Object to serialize as query parameters and append to the request URL. |
| `requestName?` | `string` | Request the API to send a notification when done. |

#### Defined in

[transport/interfaces.ts:73](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/transport/interfaces.ts#L73)

___

### IHttpResponse

Ƭ **IHttpResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `headers?` | `any` |
| `status` | `number` |
| `statusText` | `string` |

#### Defined in

[transport/interfaces.ts:88](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/transport/interfaces.ts#L88)

___

### IThemeOverrides

Ƭ **IThemeOverrides**: { [app in App]?: string}

#### Defined in

[configure/interfaces.ts:142](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L142)

___

### ManagePropertiesParameters

Ƭ **ManagePropertiesParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `resources`: [IResource](interfaces/iresource.md)[]  }

#### Defined in

[explore/interfaces.ts:405](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L405)

___

### ManagePropertiesResult

Ƭ **ManagePropertiesResult**: [IActionResult](interfaces/iactionresult.md) & { `genericProps`: [IProperty](interfaces/iproperty.md)[]  }

#### Defined in

[explore/interfaces.ts:444](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L444)

___

### MoveParameters

Ƭ **MoveParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `folderId`: [ID](modules.md#id) ; `folderIds`: [ID](modules.md#id)[] ; `resourceIds`: [ID](modules.md#id)[]  }

#### Defined in

[explore/interfaces.ts:396](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L396)

___

### NotificationModel

Ƭ **NotificationModel**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `date` | `Object` |
| `date.$date` | `number` |
| `eventType` | `string` |
| `message` | `string` |
| `params` | `Object` |
| `params.blogTitle` | `string` |
| `params.resourceUri` | `string` |
| `params.uri` | `string` |
| `params.username` | `string` |
| `recipients?` | [Recipient](interfaces/recipient.md)[] |
| `reported?` | `boolean` |
| `reporters?` | `any` |
| `resource` | `string` |
| `sender` | `string` |
| `type` | `string` |

#### Defined in

[apps/timeline/interfaces.ts:49](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L49)

___

### OrderValues

Ƭ **OrderValues**: { [O in SortByType]?: SortOrderType}

#### Defined in

[explore/interfaces.ts:425](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L425)

___

### PropFormatType

Ƭ **PropFormatType**: typeof [PROP\_FORMAT](modules.md#prop_format)[keyof typeof [PROP\_FORMAT](modules.md#prop_format)]

#### Defined in

[explore/interfaces.ts:255](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L255)

___

### PropKeyType

Ƭ **PropKeyType**: typeof [PROP\_KEY](modules.md#prop_key)[keyof typeof [PROP\_KEY](modules.md#prop_key)]

#### Defined in

[explore/interfaces.ts:234](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L234)

___

### PropModeType

Ƭ **PropModeType**: typeof [PROP\_MODE](modules.md#prop_mode)[keyof typeof [PROP\_MODE](modules.md#prop_mode)]

#### Defined in

[explore/interfaces.ts:240](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L240)

___

### PropTypeType

Ƭ **PropTypeType**: typeof [PROP\_TYPE](modules.md#prop_type)[keyof typeof [PROP\_TYPE](modules.md#prop_type)]

#### Defined in

[explore/interfaces.ts:249](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L249)

___

### ResourceType

Ƭ **ResourceType**: typeof [RESOURCE](modules.md#resource)[keyof typeof [RESOURCE](modules.md#resource)]

#### Defined in

[explore/interfaces.ts:143](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L143)

___

### Shool

Ƭ **Shool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `classes` | `string`[] |
| `id` | `string` |
| `name` | `string` |

#### Defined in

[session/interfaces.ts:36](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L36)

___

### SortByType

Ƭ **SortByType**: typeof [SORT\_BY](modules.md#sort_by)[keyof typeof [SORT\_BY](modules.md#sort_by)]

#### Defined in

[explore/interfaces.ts:216](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L216)

___

### SortOrderType

Ƭ **SortOrderType**: typeof [SORT\_ORDER](modules.md#sort_order)[keyof typeof [SORT\_ORDER](modules.md#sort_order)]

#### Defined in

[explore/interfaces.ts:196](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L196)

___

### StringFilterType

Ƭ **StringFilterType**: typeof [STRING\_FILTER](modules.md#string_filter)[keyof typeof [STRING\_FILTER](modules.md#string_filter)]

#### Defined in

[explore/interfaces.ts:189](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L189)

___

### StringFilterValue

Ƭ **StringFilterValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `i18n` | `string` |
| `value` | `string` |

#### Defined in

[explore/interfaces.ts:220](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L220)

___

### TrackingType

Ƭ **TrackingType**: ``"matomo"`` \| ``"internal"``

#### Defined in

[configure/interfaces.ts:55](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L55)

___

### UpdateFolderParameters

Ƭ **UpdateFolderParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `app`: [App](modules.md#app) ; `folderId`: [ID](modules.md#id) ; `name`: `string` ; `parentId`: [ID](modules.md#id) \| ``"default"`` ; `type`: [ResourceType](modules.md#resourcetype)  }

#### Defined in

[explore/interfaces.ts:384](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L384)

___

### UpdateFolderResult

Ƭ **UpdateFolderResult**: [CreateFolderResult](modules.md#createfolderresult) & { `parentId`: [ID](modules.md#id) \| ``"default"`` ; `updatedAt`: `string`  }

#### Defined in

[explore/interfaces.ts:440](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L440)

___

### UpdatePropertiesParameters

Ƭ **UpdatePropertiesParameters**: [IActionParameters](interfaces/iactionparameters.md) & { `props`: { [key in PropKeyType]?: string} ; `resources`: [IResource](interfaces/iresource.md)[]  }

#### Defined in

[explore/interfaces.ts:406](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L406)

___

### UpdatePropertiesResult

Ƭ **UpdatePropertiesResult**: [IActionResult](interfaces/iactionresult.md) & { `resources`: [IResource](interfaces/iresource.md)[]  }

#### Defined in

[explore/interfaces.ts:445](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L445)

___

### UserPreferenceKey

Ƭ **UserPreferenceKey**: ``"apps"`` \| ``"widgets"`` \| ``"language"`` \| [App](modules.md#app)

#### Defined in

[configure/interfaces.ts:159](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L159)

___

### WidgetName

Ƭ **WidgetName**: typeof [WIDGET\_NAME](modules.md#widget_name)[keyof typeof [WIDGET\_NAME](modules.md#widget_name)]

#### Defined in

[widget/interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L22)

___

### WidgetPosition

Ƭ **WidgetPosition**: typeof [WIDGET\_POSITION](modules.md#widget_position)[keyof typeof [WIDGET\_POSITION](modules.md#widget_position)]

#### Defined in

[session/interfaces.ts:121](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L121)

___

### WidgetUserPref

Ƭ **WidgetUserPref**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `position?` | [WidgetPosition](modules.md#widgetposition) |
| `show` | `boolean` |

#### Defined in

[widget/interfaces.ts:57](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L57)

## Variables

### ACTION

• `Const` **ACTION**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `COMMENT` | ``"comment"`` |
| `COPY` | ``"copy"`` |
| `CREATE` | ``"create"`` |
| `DELETE` | ``"delete"`` |
| `EXPORT` | ``"export"`` |
| `INITIALIZE` | ``"initialize"`` |
| `MANAGE` | ``"manage"`` |
| `MOVE` | ``"move"`` |
| `OPEN` | ``"open"`` |
| `PRINT` | ``"print"`` |
| `PUBLISH` | ``"publish"`` |
| `SEARCH` | ``"search"`` |
| `SHARE` | ``"share"`` |
| `UPD_PROPS` | ``"properties"`` |

#### Defined in

[explore/interfaces.ts:153](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L153)

___

### APP

• `Const` **APP**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BLOG` | ``"blog"`` |
| `EXERCIZER` | ``"exercizer"`` |
| `EXPLORER` | ``"explorer"`` |
| `PORTAL` | ``"portal"`` |
| `TIMELINE` | ``"timeline"`` |

#### Defined in

[globals.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/globals.ts#L20)

___

### BOOLEAN\_FILTER

• `Const` **BOOLEAN\_FILTER**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FAVORITE` | ``"favorite"`` |
| `OWNER` | ``"owner"`` |
| `PUBLIC` | ``"public"`` |
| `SHARED` | ``"shared"`` |

#### Defined in

[explore/interfaces.ts:179](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L179)

___

### ERROR\_CODE

• `Const` **ERROR\_CODE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AGENT_NOT_FOUND` | ``"0050"`` |
| `APP_NOT_FOUND` | ``"0040"`` |
| `NOT_INITIALIZED` | ``"0020"`` |
| `NOT_SUPPORTED` | ``"0030"`` |
| `SUCCESS` | ``"0000"`` |
| `TIME_OUT` | ``"0070"`` |
| `TRANSPORT_ERROR` | ``"0060"`` |
| `UNKNOWN` | ``"0010"`` |

#### Defined in

[globals.ts:7](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/globals.ts#L7)

___

### FOLDER

• `Const` **FOLDER**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BIN` | ``"bin"`` |
| `DEFAULT` | ``"default"`` |

#### Defined in

[explore/interfaces.ts:172](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L172)

___

### PROP\_FORMAT

• `Const` **PROP\_FORMAT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PLAIN` | ``"plain"`` |

#### Defined in

[explore/interfaces.ts:251](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L251)

___

### PROP\_KEY

• `Const` **PROP\_KEY**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `COLOR` | ``"color"`` |
| `DESCRIPTION` | ``"description"`` |
| `IMAGE` | ``"image"`` |
| `TITLE` | ``"title"`` |
| `URL` | ``"url"`` |

#### Defined in

[explore/interfaces.ts:226](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L226)

___

### PROP\_MODE

• `Const` **PROP\_MODE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `READONLY` | ``"RO"`` |
| `READWRITE` | ``"RW"`` |

#### Defined in

[explore/interfaces.ts:236](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L236)

___

### PROP\_TYPE

• `Const` **PROP\_TYPE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DATE` | ``"date"`` |
| `IMAGE` | ``"image"`` |
| `NUMBER` | ``"number"`` |
| `TEXT` | ``"text"`` |

#### Defined in

[explore/interfaces.ts:242](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L242)

___

### RESOURCE

• `Const` **RESOURCE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BLOG` | ``"blog"`` |
| `EXERCISE` | ``"exercise"`` |
| `FOLDER` | ``"folder"`` |

#### Defined in

[explore/interfaces.ts:138](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L138)

___

### SORT\_BY

• `Const` **SORT\_BY**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MODIFY_DATE` | ``"modifiedAt"`` |
| `NAME` | ``"name"`` |
| `VIEWS` | ``"views"`` |

#### Defined in

[explore/interfaces.ts:197](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L197)

___

### SORT\_ORDER

• `Const` **SORT\_ORDER**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ASC` | ``"asc"`` |
| `DESC` | ``"desc"`` |

#### Defined in

[explore/interfaces.ts:192](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L192)

___

### STRING\_FILTER

• `Const` **STRING\_FILTER**: `Object`

#### Defined in

[explore/interfaces.ts:186](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L186)

___

### WIDGET\_NAME

• `Const` **WIDGET\_NAME**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AGENDA` | ``"agenda-widget"`` |
| `BIRTHDAY` | ``"birthday"`` |
| `BOOKMARK` | ``"bookmark-widget"`` |
| `CALENDAR` | ``"calendar-widget"`` |
| `CARNET` | ``"carnet-de-bord"`` |
| `CURSUS` | ``"cursus-widget"`` |
| `LAST_INFOS` | ``"last-infos-widget"`` |
| `MAXICOURS` | ``"maxicours-widget"`` |
| `MOOD` | ``"mood"`` |
| `MY_APPS` | ``"my-apps"`` |
| `NOTES` | ``"notes"`` |
| `QWANT` | ``"qwant"`` |
| `QWANT_JUNIOR` | ``"qwant-junior"`` |
| `RECORD` | ``"record-me"`` |
| `RSS` | ``"rss-widget"`` |

#### Defined in

[widget/interfaces.ts:5](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L5)

___

### WIDGET\_POSITION

• `Const` **WIDGET\_POSITION**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LEFT` | ``"left"`` |
| `RIGHT` | ``"right"`` |

#### Defined in

[session/interfaces.ts:116](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L116)

___

### appNameForResource

• `Const` **appNameForResource**: { [R in ResourceType]: App}

#### Defined in

[explore/interfaces.ts:146](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L146)

___

### explorer

• `Const` **explorer**: [IExplorerFramework](interfaces/iexplorerframework.md)

The whole framework is a singleton.

#### Defined in

[explore/Framework.ts:40](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/Framework.ts#L40)
