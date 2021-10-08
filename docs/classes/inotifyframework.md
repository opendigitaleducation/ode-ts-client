[ode-ts-client](../README.md) / [Exports](../modules.md) / INotifyFramework

# Class: INotifyFramework

## Table of contents

### Constructors

- [constructor](inotifyframework.md#constructor)

### Methods

- [events](inotifyframework.md#events)
- [onLangReady](inotifyframework.md#onlangready)
- [onOverridesReady](inotifyframework.md#onoverridesready)
- [onSessionReady](inotifyframework.md#onsessionready)
- [onSkinReady](inotifyframework.md#onskinready)
- [promisify](inotifyframework.md#promisify)

## Constructors

### constructor

\+ **new INotifyFramework**(): [*INotifyFramework*](inotifyframework.md)

**Returns:** [*INotifyFramework*](inotifyframework.md)

## Methods

### events

▸ `Abstract`**events**(): [*Subject*](rxjs.subject.md)<{ `data?`: *any* ; `layer`: *string* ; `name`: [*EventName*](../modules.md#eventname)  }\>

Notify that an event occured.
By definition, an event can occur multiple times (otherwise it is a one-time "process", see above) and be watched by many targets.
=> We use RxJS Subject to model events stream with many potential subscribers.

**Returns:** [*Subject*](rxjs.subject.md)<{ `data?`: *any* ; `layer`: *string* ; `name`: [*EventName*](../modules.md#eventname)  }\>

___

### onLangReady

▸ `Abstract`**onLangReady**(): [*IPromisified*](../interfaces/ipromisified.md)<string\>

Notify that a process is done and data ready or rejected.
Promise / resolve / reject of current user's language.

**Returns:** [*IPromisified*](../interfaces/ipromisified.md)<string\>

___

### onOverridesReady

▸ `Abstract`**onOverridesReady**(): [*IPromisified*](../interfaces/ipromisified.md)<[*IThemeOverrides*](../modules.md#ithemeoverrides)\>

Notify that a process is done and data ready or rejected.
This data is not intended to change after being resolved.
Promise / resolve / reject of asynchronous skin overrides.

**Returns:** [*IPromisified*](../interfaces/ipromisified.md)<[*IThemeOverrides*](../modules.md#ithemeoverrides)\>

___

### onSessionReady

▸ `Abstract`**onSessionReady**(): [*IPromisified*](../interfaces/ipromisified.md)<[*IUserInfo*](../interfaces/iuserinfo.md)\>

Notify that a process is done and data ready or rejected.
Promise / resolve / reject of current user's session.

**Returns:** [*IPromisified*](../interfaces/ipromisified.md)<[*IUserInfo*](../interfaces/iuserinfo.md)\>

___

### onSkinReady

▸ `Abstract`**onSkinReady**(): [*IPromisified*](../interfaces/ipromisified.md)<[*ITheme*](../interfaces/itheme.md)\>

Notify that a process is done and data ready or rejected.
This data is not intended to change after being resolved.
Promise / resolve / reject of asynchronous skin.

**Returns:** [*IPromisified*](../interfaces/ipromisified.md)<[*ITheme*](../interfaces/itheme.md)\>

___

### promisify

▸ `Abstract`**promisify**<T\>(): [*IPromisified*](../interfaces/ipromisified.md)<T\>

Notify that a process is done and data ready or rejected.
Utility method : wrap your own Promise.
Or use one of the predefined promises.

#### Type parameters:

Name |
:------ |
`T` |

**Returns:** [*IPromisified*](../interfaces/ipromisified.md)<T\>
