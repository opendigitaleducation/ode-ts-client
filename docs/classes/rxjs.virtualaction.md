[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / VirtualAction

# Class: VirtualAction<T\>

[RxJS](../modules/rxjs.md).VirtualAction

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* *AsyncAction*<T\>

  ↳ **VirtualAction**

## Table of contents

### Constructors

- [constructor](rxjs.virtualaction.md#constructor)

### Properties

- [active](rxjs.virtualaction.md#active)
- [closed](rxjs.virtualaction.md#closed)
- [delay](rxjs.virtualaction.md#delay)
- [id](rxjs.virtualaction.md#id)
- [index](rxjs.virtualaction.md#index)
- [pending](rxjs.virtualaction.md#pending)
- [scheduler](rxjs.virtualaction.md#scheduler)
- [state](rxjs.virtualaction.md#state)
- [work](rxjs.virtualaction.md#work)
- [EMPTY](rxjs.virtualaction.md#empty)
- [sortActions](rxjs.virtualaction.md#sortactions)

### Methods

- [\_execute](rxjs.virtualaction.md#_execute)
- [add](rxjs.virtualaction.md#add)
- [execute](rxjs.virtualaction.md#execute)
- [recycleAsyncId](rxjs.virtualaction.md#recycleasyncid)
- [remove](rxjs.virtualaction.md#remove)
- [requestAsyncId](rxjs.virtualaction.md#requestasyncid)
- [schedule](rxjs.virtualaction.md#schedule)
- [unsubscribe](rxjs.virtualaction.md#unsubscribe)

## Constructors

### constructor

\+ **new VirtualAction**<T\>(`scheduler`: [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md), `work`: (`state?`: T) => *void*, `index?`: *number*): [*VirtualAction*](rxjs.virtualaction.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`scheduler` | [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md) |
`work` | (`state?`: T) => *void* |
`index?` | *number* |

**Returns:** [*VirtualAction*](rxjs.virtualaction.md)<T\>

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:40

## Properties

### active

• `Protected` **active**: *boolean*

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:40

___

### closed

• **closed**: *boolean*

A flag to indicate whether this Subscription has already been unsubscribed.

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:21

___

### delay

• **delay**: *number*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/AsyncAction.d.ts:10

___

### id

• **id**: *any*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/AsyncAction.d.ts:8

___

### index

• `Protected` **index**: *number*

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:39

___

### pending

• `Protected` **pending**: *boolean*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/AsyncAction.d.ts:11

___

### scheduler

• `Protected` **scheduler**: [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md)

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:37

___

### state

• `Optional` **state**: T

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/AsyncAction.d.ts:9

___

### work

• `Protected` **work**: (`state?`: T) => *void*

#### Type declaration:

▸ (`state?`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`state?` | T |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:38

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:38

___

### EMPTY

▪ `Static` **EMPTY**: [*Subscription*](rxjs.subscription.md)

**`nocollapse`** 

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:17

___

### sortActions

▪ `Static` `Private` **sortActions**: *any*

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:46

## Methods

### \_execute

▸ `Protected`**_execute**(`state`: T, `delay`: *number*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`delay` | *number* |

**Returns:** *any*

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:45

___

### add

▸ **add**(`teardown`: [*TeardownLogic*](../modules/rxjs.md#teardownlogic)): *void*

Adds a teardown to this subscription, so that teardown will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already {@link #closed},
because it has already been unsubscribed, then whatever teardown is passed to it
will automatically be executed (unless the teardown itself is also a closed subscription).

Closed Subscriptions cannot be added as teardowns to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and [Unsubscribable](../interfaces/rxjs.unsubscribable.md) objects that you wish to remove
will need to be removed manually with {@link #remove}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teardown` | [*TeardownLogic*](../modules/rxjs.md#teardownlogic) | The teardown logic to add to this subscription.    |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:58

___

### execute

▸ **execute**(`state`: T, `delay`: *number*): *any*

Immediately executes this action and the `work` it contains.

#### Parameters:

Name | Type |
:------ | :------ |
`state` | T |
`delay` | *number* |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/AsyncAction.d.ts:20

___

### recycleAsyncId

▸ `Protected`**recycleAsyncId**(`scheduler`: [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md), `id?`: *any*, `delay?`: *number*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`scheduler` | [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md) |
`id?` | *any* |
`delay?` | *number* |

**Returns:** *any*

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:44

___

### remove

▸ **remove**(`teardown`: [*Subscription*](rxjs.subscription.md) \| [*Unsubscribable*](../interfaces/rxjs.unsubscribable.md) \| () => *void*): *void*

Removes a teardown from this subscription that was previously added with the {@link #add} method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same teardown instance of a function or an unsubscribable object to a `Subcription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All teardown instances are removed to free up memory upon unsubscription.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`teardown` | [*Subscription*](rxjs.subscription.md) \| [*Unsubscribable*](../interfaces/rxjs.unsubscribable.md) \| () => *void* | The teardown to remove from this subscription    |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:92

___

### requestAsyncId

▸ `Protected`**requestAsyncId**(`scheduler`: [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md), `id?`: *any*, `delay?`: *number*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`scheduler` | [*VirtualTimeScheduler*](rxjs.virtualtimescheduler.md) |
`id?` | *any* |
`delay?` | *number* |

**Returns:** *any*

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:43

___

### schedule

▸ **schedule**(`state?`: T, `delay?`: *number*): [*Subscription*](rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`state?` | T |
`delay?` | *number* |

**Returns:** [*Subscription*](rxjs.subscription.md)

Overrides: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/VirtualTimeScheduler.d.ts:42

___

### unsubscribe

▸ **unsubscribe**(): *void*

**Returns:** *void*

Inherited from: void

Defined in: node_modules/rxjs/dist/types/internal/scheduler/AsyncAction.d.ts:22
