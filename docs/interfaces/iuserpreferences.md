[ode-ts-client](../README.md) / [Exports](../modules.md) / IUserPreferences

# Interface: IUserPreferences

## Table of contents

### Properties

- [data](iuserpreferences.md#data)

### Methods

- [get](iuserpreferences.md#get)
- [load](iuserpreferences.md#load)
- [save](iuserpreferences.md#save)
- [update](iuserpreferences.md#update)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apps` |  |
| `blog` |  |
| `exercizer` |  |
| `explorer` |  |
| `language` |  |
| `portal` |  |
| `timeline` |  |
| `widgets` |  |

#### Defined in

[configure/interfaces.ts:163](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L163)

## Methods

### get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [UserPreferenceKey](../modules.md#userpreferencekey) |

#### Returns

`any`

#### Defined in

[configure/interfaces.ts:164](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L164)

___

### load

▸ **load**(`key`, `defaultTo?`): `Promise`<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [UserPreferenceKey](../modules.md#userpreferencekey) |
| `defaultTo?` | `any` |

#### Returns

`Promise`<any\>

#### Defined in

[configure/interfaces.ts:165](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L165)

___

### save

▸ **save**(`key`): `Promise`<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [UserPreferenceKey](../modules.md#userpreferencekey) |

#### Returns

`Promise`<void\>

#### Defined in

[configure/interfaces.ts:167](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L167)

___

### update

▸ **update**(`key`, `data`): [IUserPreferences](iuserpreferences.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [UserPreferenceKey](../modules.md#userpreferencekey) |
| `data` | `any` |

#### Returns

[IUserPreferences](iuserpreferences.md)

#### Defined in

[configure/interfaces.ts:166](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L166)
