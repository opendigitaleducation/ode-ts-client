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

[configure/interfaces.ts:78](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L78)

___

### logoutCallback

• `Readonly` **logoutCallback**: `string`

#### Defined in

[configure/interfaces.ts:79](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L79)

___

### portalTemplate

• `Readonly` **portalTemplate**: `string`

#### Defined in

[configure/interfaces.ts:77](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L77)

___

### skin

• `Readonly` **skin**: `string`

#### Defined in

[configure/interfaces.ts:75](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L75)

___

### skinName

• `Readonly` **skinName**: `string`

#### Defined in

[configure/interfaces.ts:73](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L73)

___

### skins

• `Readonly` **skins**: [IThemeConfOverriding](ithemeconfoverriding.md)[]

#### Defined in

[configure/interfaces.ts:80](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L80)

___

### themeName

• `Readonly` **themeName**: `string`

#### Defined in

[configure/interfaces.ts:74](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L74)

___

### themeUrl

• `Readonly` **themeUrl**: `string`

#### Defined in

[configure/interfaces.ts:76](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L76)

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

[configure/interfaces.ts:83](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L83)

___

### listSkins

▸ **listSkins**(): `Promise`<[IThemeConfOverriding](ithemeconfoverriding.md)[]\>

List available skins.

#### Returns

`Promise`<[IThemeConfOverriding](ithemeconfoverriding.md)[]\>

#### Defined in

[configure/interfaces.ts:98](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L98)

___

### listThemes

▸ **listThemes**(): `Promise`<[IThemeDesc](ithemedesc.md)[]\>

List available themes.

#### Returns

`Promise`<[IThemeDesc](ithemedesc.md)[]\>

#### Defined in

[configure/interfaces.ts:92](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L92)

___

### onOverrideReady

▸ **onOverrideReady**(): `Promise`<[IThemeOverrides](../modules.md#ithemeoverrides)\>

Await for overrides conf to be loaded.

#### Returns

`Promise`<[IThemeOverrides](../modules.md#ithemeoverrides)\>

#### Defined in

[configure/interfaces.ts:89](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L89)

___

### onSkinReady

▸ **onSkinReady**(): `Promise`<[ITheme](itheme.md)\>

Await for skin conf to be loaded.

#### Returns

`Promise`<[ITheme](itheme.md)\>

#### Defined in

[configure/interfaces.ts:86](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L86)

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

[configure/interfaces.ts:95](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/configure/interfaces.ts#L95)
