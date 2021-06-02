[ode-ts-client](../README.md) / [Exports](../modules.md) / INotifyFramework

# Class: INotifyFramework

## Table of contents

### Constructors

- [constructor](inotifyframework.md#constructor)

### Methods

- [onEvent](inotifyframework.md#onevent)
- [onOverridesReady](inotifyframework.md#onoverridesready)
- [onSkinReady](inotifyframework.md#onskinready)

## Constructors

### constructor

• **new INotifyFramework**()

## Methods

### onEvent

▸ `Abstract` **onEvent**<T\>(`eventName`): `Subject`<T\>

Notify / be notified of events.
Those events may happen many times (stream of events).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: [INotice](../interfaces/inotice.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`Subject`<T\>

#### Defined in

[notify/interfaces.ts:29](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L29)

___

### onOverridesReady

▸ `Abstract` **onOverridesReady**(): [IPromisified](../interfaces/ipromisified.md)<[IThemeOverrides](../modules.md#ithemeoverrides)\>

Promise / resolve / reject of asynchronous skin overrides.
This data is not intended to change after being resolved.

#### Returns

[IPromisified](../interfaces/ipromisified.md)<[IThemeOverrides](../modules.md#ithemeoverrides)\>

#### Defined in

[notify/interfaces.ts:41](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L41)

___

### onSkinReady

▸ `Abstract` **onSkinReady**(): [IPromisified](../interfaces/ipromisified.md)<[ITheme](../interfaces/itheme.md)\>

Promise / resolve / reject of asynchronous skin.
This data is not intended to change after being resolved.

#### Returns

[IPromisified](../interfaces/ipromisified.md)<[ITheme](../interfaces/itheme.md)\>

#### Defined in

[notify/interfaces.ts:35](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L35)
