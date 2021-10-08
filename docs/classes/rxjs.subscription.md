[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Subscription

# Class: Subscription

[RxJS](../modules/rxjs.md).Subscription

Represents a disposable resource, such as the execution of an Observable. A
Subscription has one important method, `unsubscribe`, that takes no argument
and just disposes the resource held by the subscription.

Additionally, subscriptions may be grouped together through the `add()`
method, which will attach a child Subscription to the current Subscription.
When a Subscription is unsubscribed, all its children (and its grandchildren)
will be unsubscribed as well.

## Hierarchy

* **Subscription**

  ↳ [*Subscriber*](rxjs.subscriber.md)

  ↳ [*SchedulerAction*](../interfaces/rxjs.scheduleraction.md)

## Implements

* [*SubscriptionLike*](../interfaces/rxjs.subscriptionlike.md)

## Table of contents

### Constructors

- [constructor](rxjs.subscription.md#constructor)

### Properties

- [\_addParent](rxjs.subscription.md#_addparent)
- [\_hasParent](rxjs.subscription.md#_hasparent)
- [\_parentage](rxjs.subscription.md#_parentage)
- [\_removeParent](rxjs.subscription.md#_removeparent)
- [\_teardowns](rxjs.subscription.md#_teardowns)
- [closed](rxjs.subscription.md#closed)
- [initialTeardown](rxjs.subscription.md#initialteardown)
- [EMPTY](rxjs.subscription.md#empty)

### Methods

- [add](rxjs.subscription.md#add)
- [remove](rxjs.subscription.md#remove)
- [unsubscribe](rxjs.subscription.md#unsubscribe)

## Constructors

### constructor

\+ **new Subscription**(`initialTeardown?`: () => *void*): [*Subscription*](rxjs.subscription.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`initialTeardown?` | () => *void* | A function executed first as part of the teardown process that is kicked off when {@link #unsubscribe} is called.    |

**Returns:** [*Subscription*](rxjs.subscription.md)

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:27

## Properties

### \_addParent

• `Private` **\_addParent**: *any*

Adds a parent to this subscription so it can be removed from the parent if it
unsubscribes on it's own.

NOTE: THIS ASSUMES THAT [_hasParent](rxjs.subscription.md#_hasparent) HAS ALREADY BEEN CHECKED.

**`param`** The parent subscription to add

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:72

___

### \_hasParent

• `Private` **\_hasParent**: *any*

Checks to see if a this subscription already has a particular parent.
This will signal that this subscription has already been added to the parent in question.

**`param`** the parent to check for

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:64

___

### \_parentage

• `Private` **\_parentage**: *any*

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:22

___

### \_removeParent

• `Private` **\_removeParent**: *any*

Called on a child when it is removed via {@link #remove}.

**`param`** The parent to remove

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:77

___

### \_teardowns

• `Private` **\_teardowns**: *any*

The list of registered teardowns to execute upon unsubscription. Adding and removing from this
list occurs in the {@link #add} and {@link #remove} methods.

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:27

___

### closed

• **closed**: *boolean*

A flag to indicate whether this Subscription has already been unsubscribed.

Implementation of: [SubscriptionLike](../interfaces/rxjs.subscriptionlike.md).[closed](../interfaces/rxjs.subscriptionlike.md#closed)

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:21

___

### initialTeardown

• `Private` `Optional` **initialTeardown**: *any*

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:15

___

### EMPTY

▪ `Static` **EMPTY**: [*Subscription*](rxjs.subscription.md)

**`nocollapse`** 

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:17

## Methods

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

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:58

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

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:92

___

### unsubscribe

▸ **unsubscribe**(): *void*

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

**Returns:** *void*

Implementation of: [SubscriptionLike](../interfaces/rxjs.subscriptionlike.md)

Defined in: node_modules/rxjs/dist/types/internal/Subscription.d.ts:39
