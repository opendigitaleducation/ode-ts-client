[ode-ts-client](../README.md) / [Exports](../modules.md) / IConfigurationFramework

# Interface: IConfigurationFramework

## Table of contents

### Properties

- [Platform](iconfigurationframework.md#platform)
- [School](iconfigurationframework.md#school)
- [User](iconfigurationframework.md#user)

### Methods

- [initialize](iconfigurationframework.md#initialize)

## Properties

### Platform

• `Readonly` **Platform**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apps` | `Object` |
| `apps.getPublicConf` | [object Object] |
| `apps.initialize` | [object Object] |
| `apps.loadI18n` | [object Object] |
| `cdnDomain` | `string` |
| `deploymentTag` | `string` |
| `idiom` | [IIdiom](iidiom.md) |
| `theme` | [ITheme](itheme.md) |

#### Defined in

[configure/interfaces.ts:18](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L18)

___

### School

• `Readonly` **School**: `Object`

#### Defined in

[configure/interfaces.ts:33](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L33)

___

### User

• `Readonly` **User**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bookmarkedApps` | [AppModel](../modules.md#appmodel)[] |
| `keepOpenOnLogout` | `boolean` |
| `preferences` | [IUserPreferences](iuserpreferences.md) |

#### Defined in

[configure/interfaces.ts:36](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L36)

## Methods

### initialize

▸ **initialize**(`version`, `cdnDomain`): `Promise`<void\>

Framework initialization

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | ``null`` \| `string` |
| `cdnDomain` | ``null`` \| `string` |

#### Returns

`Promise`<void\>

#### Defined in

[configure/interfaces.ts:16](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L16)
