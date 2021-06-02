[ode-ts-client](../README.md) / [Exports](../modules.md) / IPromisified

# Interface: IPromisified<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [promise](ipromisified.md#promise)
- [reject](ipromisified.md#reject)
- [resolve](ipromisified.md#resolve)

## Properties

### promise

• `Readonly` **promise**: `Promise`<T\>

#### Defined in

[notify/interfaces.ts:47](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L47)

___

### reject

• **reject**: (`reason?`: `any`) => `void`

#### Type declaration

▸ (`reason?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

##### Returns

`void`

#### Defined in

[notify/interfaces.ts:49](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L49)

___

### resolve

• **resolve**: (`value`: `T` \| `PromiseLike`<T\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` \| `PromiseLike`<T\> |

##### Returns

`void`

#### Defined in

[notify/interfaces.ts:48](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L48)
