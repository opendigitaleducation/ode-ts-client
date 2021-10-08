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

• **data**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`apps` |  |
`authenticatedConnectorsAccessed` |  |
`blog` |  |
`cas` |  |
`cursus` |  |
`exercizer` |  |
`explorer` |  |
`infotip` |  |
`language` |  |
`portal` |  |
`rgpdCookies` |  |
`timeline` |  |
`widgets` |  |

Defined in: [src/ts/configure/interfaces.ts:211](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L211)

## Methods

### get

▸ **get**(`key`: [*UserPreferenceKey*](../modules.md#userpreferencekey)): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*UserPreferenceKey*](../modules.md#userpreferencekey) |

**Returns:** *any*

Defined in: [src/ts/configure/interfaces.ts:212](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L212)

___

### load

▸ **load**(`key`: [*UserPreferenceKey*](../modules.md#userpreferencekey), `defaultTo?`: *any*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*UserPreferenceKey*](../modules.md#userpreferencekey) |
`defaultTo?` | *any* |

**Returns:** *Promise*<any\>

Defined in: [src/ts/configure/interfaces.ts:213](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L213)

___

### save

▸ **save**(`key`: [*UserPreferenceKey*](../modules.md#userpreferencekey)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*UserPreferenceKey*](../modules.md#userpreferencekey) |

**Returns:** *Promise*<void\>

Defined in: [src/ts/configure/interfaces.ts:215](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L215)

___

### update

▸ **update**(`key`: [*UserPreferenceKey*](../modules.md#userpreferencekey), `data`: *any*): [*IUserPreferences*](iuserpreferences.md)

#### Parameters:

Name | Type |
:------ | :------ |
`key` | [*UserPreferenceKey*](../modules.md#userpreferencekey) |
`data` | *any* |

**Returns:** [*IUserPreferences*](iuserpreferences.md)

Defined in: [src/ts/configure/interfaces.ts:214](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L214)
