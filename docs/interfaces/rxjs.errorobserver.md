[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / ErrorObserver

# Interface: ErrorObserver<T\>

[RxJS](../modules/rxjs.md).ErrorObserver

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [closed](rxjs.errorobserver.md#closed)
- [complete](rxjs.errorobserver.md#complete)
- [error](rxjs.errorobserver.md#error)
- [next](rxjs.errorobserver.md#next)

## Properties

### closed

• `Optional` **closed**: *boolean*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:123

___

### complete

• `Optional` **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:126

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:126

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

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:125

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:125

___

### next

• `Optional` **next**: (`value`: T) => *void*

#### Type declaration:

▸ (`value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:124

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:124
