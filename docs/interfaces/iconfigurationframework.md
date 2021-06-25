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
| `analytics` | `Object` |
| `analytics.status` | [AnalyticStatus](../modules.md#analyticstatus) |
| `analytics.parameters` | [object Object] |
| `apps` | `Object` |
| `apps.getPublicConf` | [object Object] |
| `apps.initialize` | [object Object] |
| `apps.loadI18n` | [object Object] |
| `cdnDomain` | `string` |
| `deploymentTag` | `string` |
| `idiom` | [IIdiom](iidiom.md) |
| `theme` | [ITheme](itheme.md) |
| `listLanguages` | () => `Promise`<string[]\> |

#### Defined in

[configure/interfaces.ts:19](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L19)

___

### School

• `Readonly` **School**: `Object`

#### Defined in

[configure/interfaces.ts:38](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L38)

___

### User

• `Readonly` **User**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bookmarkedApps` | [IWebApp](iwebapp.md)[] |
| `keepOpenOnLogout` | `boolean` |
| `preferences` | [IUserPreferences](iuserpreferences.md) |
| `loadAppPrefs` | (`app`: [App](../modules.md#app)) => `Promise`<any\> |
| `loadLanguage` | () => `Promise`<string\> |
| `saveAppPrefs` | (`app`: [App](../modules.md#app)) => `Promise`<void\> |
| `saveLanguage` | (`lang`: `string`) => `Promise`<void\> |

#### Defined in

[configure/interfaces.ts:41](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L41)

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

[configure/interfaces.ts:17](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L17)
