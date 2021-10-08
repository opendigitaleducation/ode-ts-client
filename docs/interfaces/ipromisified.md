[ode-ts-client](../README.md) / [Exports](../modules.md) / IPromisified

# Interface: IPromisified<T\>

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [promise](ipromisified.md#promise)
- [reject](ipromisified.md#reject)
- [resolve](ipromisified.md#resolve)

## Properties

### promise

• `Readonly` **promise**: *Promise*<T\>

Defined in: [src/ts/notify/interfaces.ts:62](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/notify/interfaces.ts#L62)

___

### reject

• **reject**: (`reason?`: *any*) => *void*

#### Type declaration:

▸ (`reason?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`reason?` | *any* |

**Returns:** *void*

Defined in: [src/ts/notify/interfaces.ts:64](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/notify/interfaces.ts#L64)

Defined in: [src/ts/notify/interfaces.ts:64](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/notify/interfaces.ts#L64)

___

### resolve

• **resolve**: (`value`: T \| *PromiseLike*<T\>) => *void*

#### Type declaration:

▸ (`value`: T \| *PromiseLike*<T\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T \| *PromiseLike*<T\> |

**Returns:** *void*

Defined in: [src/ts/notify/interfaces.ts:63](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/notify/interfaces.ts#L63)

Defined in: [src/ts/notify/interfaces.ts:63](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/notify/interfaces.ts#L63)
