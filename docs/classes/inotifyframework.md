[ode-ts-client](../README.md) / [Exports](../modules.md) / INotifyFramework

# Class: INotifyFramework

## Table of contents

### Constructors

- [constructor](inotifyframework.md#constructor)

### Methods

- [onLangReady](inotifyframework.md#onlangready)
- [onOverridesReady](inotifyframework.md#onoverridesready)
- [onSessionReady](inotifyframework.md#onsessionready)
- [onSkinReady](inotifyframework.md#onskinready)
- [promisify](inotifyframework.md#promisify)

## Constructors

### constructor

• **new INotifyFramework**()

## Methods

### onLangReady

▸ `Abstract` **onLangReady**(): [IPromisified](../interfaces/ipromisified.md)<string\>

Promise / resolve / reject of current user's language.

#### Returns

[IPromisified](../interfaces/ipromisified.md)<string\>

#### Defined in

[notify/interfaces.ts:25](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/notify/interfaces.ts#L25)

___

### onOverridesReady

▸ `Abstract` **onOverridesReady**(): [IPromisified](../interfaces/ipromisified.md)<[IThemeOverrides](../modules.md#ithemeoverrides)\>

Promise / resolve / reject of asynchronous skin overrides.
This data is not intended to change after being resolved.

#### Returns

[IPromisified](../interfaces/ipromisified.md)<[IThemeOverrides](../modules.md#ithemeoverrides)\>

#### Defined in

[notify/interfaces.ts:42](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/notify/interfaces.ts#L42)

___

### onSessionReady

▸ `Abstract` **onSessionReady**(): [IPromisified](../interfaces/ipromisified.md)<[IUserInfo](../interfaces/iuserinfo.md)\>

Promise / resolve / reject of current user's session.

#### Returns

[IPromisified](../interfaces/ipromisified.md)<[IUserInfo](../interfaces/iuserinfo.md)\>

#### Defined in

[notify/interfaces.ts:30](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/notify/interfaces.ts#L30)

___

### onSkinReady

▸ `Abstract` **onSkinReady**(): [IPromisified](../interfaces/ipromisified.md)<[ITheme](../interfaces/itheme.md)\>

Promise / resolve / reject of asynchronous skin.
This data is not intended to change after being resolved.

#### Returns

[IPromisified](../interfaces/ipromisified.md)<[ITheme](../interfaces/itheme.md)\>

#### Defined in

[notify/interfaces.ts:36](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/notify/interfaces.ts#L36)

___

### promisify

▸ `Abstract` **promisify**<T\>(): [IPromisified](../interfaces/ipromisified.md)<T\>

Utility method : wrap your own Promise.
Or use one of the predefined promises.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[IPromisified](../interfaces/ipromisified.md)<T\>

#### Defined in

[notify/interfaces.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/notify/interfaces.ts#L20)
