[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / CompletionObserver

# Interface: CompletionObserver<T\>

[RxJS](../modules/rxjs.md).CompletionObserver

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [closed](rxjs.completionobserver.md#closed)
- [complete](rxjs.completionobserver.md#complete)
- [error](rxjs.completionobserver.md#error)
- [next](rxjs.completionobserver.md#next)

## Properties

### closed

• `Optional` **closed**: *boolean*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:129

___

### complete

• **complete**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:132

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:132

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

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:131

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:131

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

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:130

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:130
