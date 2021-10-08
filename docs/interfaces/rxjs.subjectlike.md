[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / SubjectLike

# Interface: SubjectLike<T\>

[RxJS](../modules/rxjs.md).SubjectLike

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Observer*](rxjs.observer.md)<T\>

* [*Subscribable*](rxjs.subscribable.md)<T\>

  ↳ **SubjectLike**

## Table of contents

### Properties

- [complete](rxjs.subjectlike.md#complete)
- [error](rxjs.subjectlike.md#error)
- [next](rxjs.subjectlike.md#next)

### Methods

- [subscribe](rxjs.subjectlike.md#subscribe)

## Properties

### complete

• **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:138

Inherited from: [Observer](rxjs.observer.md).[complete](rxjs.observer.md#complete)

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:138

___

### error

• **error**: (`err`: *any*) => *void*

#### Type declaration:

▸ (`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:137

Inherited from: [Observer](rxjs.observer.md).[error](rxjs.observer.md#error)

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:137

___

### next

• **next**: (`value`: T) => *void*

#### Type declaration:

▸ (`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:136

Inherited from: [Observer](rxjs.observer.md).[next](rxjs.observer.md#next)

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:136

## Methods

### subscribe

▸ **subscribe**(`observer`: *Partial*<[*Observer*](rxjs.observer.md)<T\>\>): [*Unsubscribable*](rxjs.unsubscribable.md)

#### Parameters:

Name | Type |
:------ | :------ |
`observer` | *Partial*<[*Observer*](rxjs.observer.md)<T\>\> |

**Returns:** [*Unsubscribable*](rxjs.unsubscribable.md)

Inherited from: [Subscribable](rxjs.subscribable.md)

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:68
