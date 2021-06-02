[ode-ts-client](../README.md) / [Exports](../modules.md) / ITheme

# Interface: ITheme

## Table of contents

### Properties

- [basePath](itheme.md#basepath)
- [logoutCallback](itheme.md#logoutcallback)
- [portalTemplate](itheme.md#portaltemplate)
- [skin](itheme.md#skin)
- [skinName](itheme.md#skinname)
- [skins](itheme.md#skins)
- [themeName](itheme.md#themename)
- [themeUrl](itheme.md#themeurl)

### Methods

- [getConf](itheme.md#getconf)
- [listSkins](itheme.md#listskins)
- [listThemes](itheme.md#listthemes)
- [onOverrideReady](itheme.md#onoverrideready)
- [onSkinReady](itheme.md#onskinready)
- [setDefaultTheme](itheme.md#setdefaulttheme)

## Properties

### basePath

• `Readonly` **basePath**: `string`

#### Defined in

[configure/interfaces.ts:51](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L51)

___

### logoutCallback

• `Readonly` **logoutCallback**: `string`

#### Defined in

[configure/interfaces.ts:52](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L52)

___

### portalTemplate

• `Readonly` **portalTemplate**: `string`

#### Defined in

[configure/interfaces.ts:50](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L50)

___

### skin

• `Readonly` **skin**: `string`

#### Defined in

[configure/interfaces.ts:48](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L48)

___

### skinName

• `Readonly` **skinName**: `string`

#### Defined in

[configure/interfaces.ts:46](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L46)

___

### skins

• `Readonly` **skins**: [IThemeConfOverriding](ithemeconfoverriding.md)[]

#### Defined in

[configure/interfaces.ts:53](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L53)

___

### themeName

• `Readonly` **themeName**: `string`

#### Defined in

[configure/interfaces.ts:47](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L47)

___

### themeUrl

• `Readonly` **themeUrl**: `string`

#### Defined in

[configure/interfaces.ts:49](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L49)

## Methods

### getConf

▸ **getConf**(`version?`): `Promise`<[IThemeConf](ithemeconf.md)\>

Get the theme/skin configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `version?` | `string` |

#### Returns

`Promise`<[IThemeConf](ithemeconf.md)\>

#### Defined in

[configure/interfaces.ts:56](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L56)

___

### listSkins

▸ **listSkins**(): `Promise`<[IThemeConfOverriding](ithemeconfoverriding.md)[]\>

List available skins.

#### Returns

`Promise`<[IThemeConfOverriding](ithemeconfoverriding.md)[]\>

#### Defined in

[configure/interfaces.ts:71](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L71)

___

### listThemes

▸ **listThemes**(): `Promise`<[IThemeDesc](ithemedesc.md)[]\>

List available themes.

#### Returns

`Promise`<[IThemeDesc](ithemedesc.md)[]\>

#### Defined in

[configure/interfaces.ts:65](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L65)

___

### onOverrideReady

▸ **onOverrideReady**(): `Promise`<[IThemeOverrides](../modules.md#ithemeoverrides)\>

Await for overrides conf to be loaded.

#### Returns

`Promise`<[IThemeOverrides](../modules.md#ithemeoverrides)\>

#### Defined in

[configure/interfaces.ts:62](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L62)

___

### onSkinReady

▸ **onSkinReady**(): `Promise`<[ITheme](itheme.md)\>

Await for skin conf to be loaded.

#### Returns

`Promise`<[ITheme](itheme.md)\>

#### Defined in

[configure/interfaces.ts:59](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L59)

___

### setDefaultTheme

▸ **setDefaultTheme**(`theme`): `void`

Configure UI with this theme by default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [IThemeDesc](ithemedesc.md) |

#### Returns

`void`

#### Defined in

[configure/interfaces.ts:68](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/configure/interfaces.ts#L68)
