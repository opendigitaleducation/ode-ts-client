[ode-ts-client](../README.md) / [Exports](../modules.md) / ITimelineApp

# Interface: ITimelineApp

## Table of contents

### Properties

- [flashMessages](itimelineapp.md#flashmessages)
- [hasMorePage](itimelineapp.md#hasmorepage)
- [isLoading](itimelineapp.md#isloading)
- [notificationTypes](itimelineapp.md#notificationtypes)
- [notifications](itimelineapp.md#notifications)
- [page](itimelineapp.md#page)
- [preferences](itimelineapp.md#preferences)
- [selectedNotificationTypes](itimelineapp.md#selectednotificationtypes)
- [showMine](itimelineapp.md#showmine)

### Methods

- [initialize](itimelineapp.md#initialize)
- [loadFlashMessages](itimelineapp.md#loadflashmessages)
- [loadNotifications](itimelineapp.md#loadnotifications)
- [markAsRead](itimelineapp.md#markasread)
- [resetPagination](itimelineapp.md#resetpagination)
- [savePreferences](itimelineapp.md#savepreferences)

## Properties

### flashMessages

• `Readonly` **flashMessages**: [IFlashMessageModel](iflashmessagemodel.md)[]

#### Defined in

[apps/timeline/interfaces.ts:33](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L33)

___

### hasMorePage

• `Readonly` **hasMorePage**: `boolean`

#### Defined in

[apps/timeline/interfaces.ts:26](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L26)

___

### isLoading

• `Readonly` **isLoading**: `boolean`

#### Defined in

[apps/timeline/interfaces.ts:24](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L24)

___

### notificationTypes

• `Readonly` **notificationTypes**: `string`[]

#### Defined in

[apps/timeline/interfaces.ts:15](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L15)

___

### notifications

• `Readonly` **notifications**: [ITimelineNotification](itimelinenotification.md)[]

#### Defined in

[apps/timeline/interfaces.ts:21](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L21)

___

### page

• `Readonly` **page**: `number`

#### Defined in

[apps/timeline/interfaces.ts:25](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L25)

___

### preferences

• `Readonly` **preferences**: `any`

#### Defined in

[apps/timeline/interfaces.ts:29](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L29)

___

### selectedNotificationTypes

• `Readonly` **selectedNotificationTypes**: `string`[]

#### Defined in

[apps/timeline/interfaces.ts:16](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L16)

___

### showMine

• **showMine**: `boolean`

#### Defined in

[apps/timeline/interfaces.ts:18](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L18)

## Methods

### initialize

▸ **initialize**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[apps/timeline/interfaces.ts:14](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L14)

___

### loadFlashMessages

▸ **loadFlashMessages**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[apps/timeline/interfaces.ts:32](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L32)

___

### loadNotifications

▸ **loadNotifications**(`force?`): `Promise`<void\>

Load more notifications, or force loading more by virtually incrementing the page.

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`Promise`<void\>

#### Defined in

[apps/timeline/interfaces.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L20)

___

### markAsRead

▸ **markAsRead**(`msg`): `Promise`<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [IFlashMessageModel](iflashmessagemodel.md) |

#### Returns

`Promise`<void\>

#### Defined in

[apps/timeline/interfaces.ts:34](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L34)

___

### resetPagination

▸ **resetPagination**(): `void`

#### Returns

`void`

#### Defined in

[apps/timeline/interfaces.ts:23](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L23)

___

### savePreferences

▸ **savePreferences**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[apps/timeline/interfaces.ts:28](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/apps/timeline/interfaces.ts#L28)
