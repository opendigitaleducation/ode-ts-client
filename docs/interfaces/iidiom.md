[ode-ts-client](../README.md) / [Exports](../modules.md) / IIdiom

# Interface: IIdiom

## Table of contents

### Methods

- [addAllTranslations](iidiom.md#addalltranslations)
- [addBundle](iidiom.md#addbundle)
- [addBundlePromise](iidiom.md#addbundlepromise)
- [addKeys](iidiom.md#addkeys)
- [addTranslations](iidiom.md#addtranslations)
- [removeAccents](iidiom.md#removeaccents)
- [translate](iidiom.md#translate)

## Methods

### addAllTranslations

▸ **addAllTranslations**(`folders`): `Promise`<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `folders` | `string`[] |

#### Returns

`Promise`<void\>

#### Defined in

[configure/interfaces.ts:127](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L127)

___

### addBundle

▸ **addBundle**(`path`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback?` | [AddBundleCallback](../modules.md#addbundlecallback) |

#### Returns

`void`

#### Defined in

[configure/interfaces.ts:125](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L125)

___

### addBundlePromise

▸ **addBundlePromise**(`path`): `Promise`<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<void\>

#### Defined in

[configure/interfaces.ts:124](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L124)

___

### addKeys

▸ **addKeys**(`keys`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `any` |

#### Returns

`void`

#### Defined in

[configure/interfaces.ts:128](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L128)

___

### addTranslations

▸ **addTranslations**(`folder`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder` | `string` |
| `callback?` | [AddBundleCallback](../modules.md#addbundlecallback) |

#### Returns

`void`

#### Defined in

[configure/interfaces.ts:126](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L126)

___

### removeAccents

▸ **removeAccents**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[configure/interfaces.ts:129](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L129)

___

### translate

▸ **translate**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[configure/interfaces.ts:123](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L123)
