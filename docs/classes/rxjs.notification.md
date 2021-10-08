[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Notification

# Class: Notification<T\>

[RxJS](../modules/rxjs.md).Notification

Represents a push-based event or value that an [Observable](rxjs.observable.md) can emit.
This class is particularly useful for operators that manage notifications,
like [materialize](../modules/rxjs.md#materialize), [dematerialize](../modules/rxjs.md#dematerialize), [observeOn](../modules/rxjs.md#observeon), and
others. Besides wrapping the actual delivered value, it also annotates it
with metadata of, for instance, what type of push message it is (`next`,
`error`, or `complete`).

**`see`** [materialize](../modules/rxjs.md#materialize)

**`see`** [dematerialize](../modules/rxjs.md#dematerialize)

**`see`** [observeOn](../modules/rxjs.md#observeon)

**`deprecated`** It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/rxjs.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](rxjs.notification.md#constructor)

### Properties

- [error](rxjs.notification.md#error)
- [hasValue](rxjs.notification.md#hasvalue)
- [kind](rxjs.notification.md#kind)
- [value](rxjs.notification.md#value)
- [completeNotification](rxjs.notification.md#completenotification)

### Methods

- [accept](rxjs.notification.md#accept)
- [do](rxjs.notification.md#do)
- [observe](rxjs.notification.md#observe)
- [toObservable](rxjs.notification.md#toobservable)
- [createComplete](rxjs.notification.md#createcomplete)
- [createError](rxjs.notification.md#createerror)
- [createNext](rxjs.notification.md#createnext)

## Constructors

### constructor

\+ **new Notification**<T\>(`kind`: *N*, `value?`: T): [*Notification*](rxjs.notification.md)<T\>

Creates a "Next" notification object.

**`deprecated`** Internal implementation detail. Use {@link Notification#createNext createNext} instead.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`kind` | *N* | Always `'N'`   |
`value?` | T | The value to notify with if observed.   |

**Returns:** [*Notification*](rxjs.notification.md)<T\>

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:37

\+ **new Notification**<T\>(`kind`: *E*, `value`: *undefined*, `error`: *any*): [*Notification*](rxjs.notification.md)<T\>

Creates an "Error" notification object.

**`deprecated`** Internal implementation detail. Use {@link Notification#createError createError} instead.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`kind` | *E* | Always `'E'`   |
`value` | *undefined* | Always `undefined`   |
`error` | *any* | The error to notify with if observed.   |

**Returns:** [*Notification*](rxjs.notification.md)<T\>

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:44

\+ **new Notification**<T\>(`kind`: *C*): [*Notification*](rxjs.notification.md)<T\>

Creates a "completion" notification object.

**`deprecated`** Internal implementation detail. Use {@link Notification#createComplete createComplete} instead.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`kind` | *C* | Always `'C'`   |

**Returns:** [*Notification*](rxjs.notification.md)<T\>

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:52

## Properties

### error

• `Optional` `Readonly` **error**: *any*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:31

___

### hasValue

• `Readonly` **hasValue**: *boolean*

A value signifying that the notification will "next" if observed. In truth,
This is really synonymous with just checking `kind === "N"`.

**`deprecated`** Will be removed in v8. Instead, just check to see if the value of `kind` is `"N"`.

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:37

___

### kind

• `Readonly` **kind**: *N* \| *E* \| *C*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:29

___

### value

• `Optional` `Readonly` **value**: T

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:30

___

### completeNotification

▪ `Static` `Private` **completeNotification**: *any*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:134

## Methods

### accept

▸ **accept**(`next`: (`value`: T) => *void*, `error`: (`err`: *any*) => *void*, `complete`: () => *void*): *void*

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | A next handler   |
`error` | (`err`: *any*) => *void* | An error handler   |
`complete` | () => *void* | A complete handler   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:101

▸ **accept**(`next`: (`value`: T) => *void*, `error`: (`err`: *any*) => *void*): *void*

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | A next handler   |
`error` | (`err`: *any*) => *void* | An error handler   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:110

▸ **accept**(`next`: (`value`: T) => *void*): *void*

Executes the next handler if the Notification is of `kind` `"N"`. Otherwise
this will not error, and it will be a noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | The next handler   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:117

▸ **accept**(`observer`: [*PartialObserver*](../modules/rxjs.md#partialobserver)<T\>): *void*

Executes the appropriate handler on a passed `observer` given the `kind` of notification.
If the handler is missing it will do nothing. Even if the notification is an error, if
there is no error handler on the observer, an error will not be thrown, it will noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`observer` | [*PartialObserver*](../modules/rxjs.md#partialobserver)<T\> | The observer to notify.   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:125

___

### do

▸ **do**(`next`: (`value`: T) => *void*, `error`: (`err`: *any*) => *void*, `complete`: () => *void*): *void*

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | A next handler   |
`error` | (`err`: *any*) => *void* | An error handler   |
`complete` | () => *void* | A complete handler   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:75

▸ **do**(`next`: (`value`: T) => *void*, `error`: (`err`: *any*) => *void*): *void*

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | A next handler   |
`error` | (`err`: *any*) => *void* | An error handler   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:84

▸ **do**(`next`: (`value`: T) => *void*): *void*

Executes the next handler if the Notification is of `kind` `"N"`. Otherwise
this will not error, and it will be a noop.

**`deprecated`** Replaced with {@link Notification#observe observe}. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | The next handler   |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:91

___

### observe

▸ **observe**(`observer`: [*PartialObserver*](../modules/rxjs.md#partialobserver)<T\>): *void*

Executes the appropriate handler on a passed `observer` given the `kind` of notification.
If the handler is missing it will do nothing. Even if the notification is an error, if
there is no error handler on the observer, an error will not be thrown, it will noop.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`observer` | [*PartialObserver*](../modules/rxjs.md#partialobserver)<T\> | The observer to notify.    |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:65

___

### toObservable

▸ **toObservable**(): [*Observable*](rxjs.observable.md)<T\>

Returns a simple Observable that just delivers the notification represented
by this Notification instance.

**`deprecated`** Will be removed in v8. To convert a `Notification` to an [Observable](rxjs.observable.md),
use [of](../modules/rxjs.md#of) and [dematerialize](../modules/rxjs.md#dematerialize): `of(notification).pipe(dematerialize())`.

**Returns:** [*Observable*](rxjs.observable.md)<T\>

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:133

___

### createComplete

▸ `Static`**createComplete**(): [*Notification*](rxjs.notification.md)<never\> & [*CompleteNotification*](../interfaces/rxjs.completenotification.md)

A shortcut to create a Notification instance of the type `complete`.

**`nocollapse`** 

**`deprecated`** It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/rxjs.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

**Returns:** [*Notification*](rxjs.notification.md)<never\> & [*CompleteNotification*](../interfaces/rxjs.completenotification.md)

The valueless "complete" Notification.

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:170

___

### createError

▸ `Static`**createError**(`err?`: *any*): [*Notification*](rxjs.notification.md)<never\> & [*ErrorNotification*](../interfaces/rxjs.errornotification.md)

A shortcut to create a Notification instance of the type `error` from a
given error.

**`nocollapse`** 

**`deprecated`** It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/rxjs.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

#### Parameters:

Name | Type |
:------ | :------ |
`err?` | *any* |

**Returns:** [*Notification*](rxjs.notification.md)<never\> & [*ErrorNotification*](../interfaces/rxjs.errornotification.md)

The "error" Notification representing the
argument.

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:160

___

### createNext

▸ `Static`**createNext**<T\>(`value`: T): [*Notification*](rxjs.notification.md)<T\> & [*NextNotification*](../interfaces/rxjs.nextnotification.md)<T\>

A shortcut to create a Notification instance of the type `next` from a
given value.

**`nocollapse`** 

**`deprecated`** It is NOT recommended to create instances of `Notification` directly.
Rather, try to create POJOs matching the signature outlined in [ObservableNotification](../modules/rxjs.md#observablenotification).
For example: `{ kind: 'N', value: 1 }`, `{ kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.
Will be removed in v8.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | T | The `next` value.   |

**Returns:** [*Notification*](rxjs.notification.md)<T\> & [*NextNotification*](../interfaces/rxjs.nextnotification.md)<T\>

The "next" Notification representing the
argument.

Defined in: node_modules/rxjs/dist/types/internal/Notification.d.ts:147
