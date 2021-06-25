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

[configure/interfaces.ts:154](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L154)

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

[configure/interfaces.ts:152](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L152)

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

[configure/interfaces.ts:151](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L151)

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

[configure/interfaces.ts:155](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L155)

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

[configure/interfaces.ts:153](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L153)

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

[configure/interfaces.ts:156](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L156)

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

[configure/interfaces.ts:150](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L150)
