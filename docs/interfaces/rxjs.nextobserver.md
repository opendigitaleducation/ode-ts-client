[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / NextObserver

# Interface: NextObserver<T\>

[RxJS](../modules/rxjs.md).NextObserver

OBSERVER INTERFACES

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [closed](rxjs.nextobserver.md#closed)
- [complete](rxjs.nextobserver.md#complete)
- [error](rxjs.nextobserver.md#error)
- [next](rxjs.nextobserver.md#next)

## Properties

### closed

• `Optional` **closed**: *boolean*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:117

___

### complete

• `Optional` **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:120

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:120

___

### error

• `Optional` **error**: (`err`: *any*) => *void*

#### Type declaration:

▸ (`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:119

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:119

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

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:118

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:118
