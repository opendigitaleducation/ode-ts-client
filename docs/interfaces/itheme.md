[ode-ts-client](../README.md) / [Exports](../modules.md) / ITheme

# Interface: ITheme

## Table of contents

### Properties

- [basePath](itheme.md#basepath)
- [is1D](itheme.md#is1d)
- [is2D](itheme.md#is2d)
- [logoutCallback](itheme.md#logoutcallback)
- [portalTemplate](itheme.md#portaltemplate)
- [skin](itheme.md#skin)
- [skinName](itheme.md#skinname)
- [skins](itheme.md#skins)
- [themeName](itheme.md#themename)
- [themeUrl](itheme.md#themeurl)

### Methods

- [getConf](itheme.md#getconf)
- [getHelpPath](itheme.md#gethelppath)
- [listSkins](itheme.md#listskins)
- [listThemes](itheme.md#listthemes)
- [onFullyReady](itheme.md#onfullyready)
- [onOverrideReady](itheme.md#onoverrideready)
- [onSkinReady](itheme.md#onskinready)
- [setDefaultTheme](itheme.md#setdefaulttheme)

## Properties

### basePath

• `Readonly` **basePath**: *string*

(legacy) URL to the folder containing assets.

Defined in: [src/ts/configure/interfaces.ts:118](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L118)

___

### is1D

• `Readonly` **is1D**: *boolean*

Check if the "school degree" of the current theme is 1D ("panda", or an override of it).

Defined in: [src/ts/configure/interfaces.ts:125](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L125)

___

### is2D

• `Readonly` **is2D**: *boolean*

Check if the "school degree" of the current theme is 2D ("theme-open-ent" or an override of it).

Defined in: [src/ts/configure/interfaces.ts:128](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L128)

___

### logoutCallback

• `Readonly` **logoutCallback**: *string*

(legacy) URL where the user is redirected after logout.

Defined in: [src/ts/configure/interfaces.ts:120](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L120)

___

### portalTemplate

• `Readonly` **portalTemplate**: *string*

(legacy) URL to the currently active portal.html template. Used in infra-front.

Defined in: [src/ts/configure/interfaces.ts:116](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L116)

___

### skin

• `Readonly` **skin**: *string*

(legacy) FIXME Seems to be equal to themeName.

Defined in: [src/ts/configure/interfaces.ts:112](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L112)

___

### skinName

• `Readonly` **skinName**: *string*

(legacy) Name of the currently active skin (user's choice in /timeline) : "default" by default, or another available name.

Defined in: [src/ts/configure/interfaces.ts:108](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L108)

___

### skins

• `Readonly` **skins**: [*IThemeConfOverriding*](ithemeconfoverriding.md)[]

Available skins configuration (also called "overrides").

Defined in: [src/ts/configure/interfaces.ts:122](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L122)

___

### themeName

• `Readonly` **themeName**: *string*

(legacy) Name of the currently active theme, derived from a parent which is classified as 1D (panda) or 2D(theme-open-ent). This is a domain-level configurated value.

Defined in: [src/ts/configure/interfaces.ts:110](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L110)

___

### themeUrl

• `Readonly` **themeUrl**: *string*

(legacy) URL to the currently active theme/skin folder.

Defined in: [src/ts/configure/interfaces.ts:114](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L114)

## Methods

### getConf

▸ **getConf**(`version?`: *string*): *Promise*<[*IThemeConf*](ithemeconf.md)\>

Get the theme/skin configuration.

#### Parameters:

Name | Type |
:------ | :------ |
`version?` | *string* |

**Returns:** *Promise*<[*IThemeConf*](ithemeconf.md)\>

Defined in: [src/ts/configure/interfaces.ts:131](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L131)

___

### getHelpPath

▸ **getHelpPath**(): *Promise*<String\>

Get the help path, which can be dedicated to 1D or 2D.

**Returns:** *Promise*<String\>

Defined in: [src/ts/configure/interfaces.ts:152](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L152)

___

### listSkins

▸ **listSkins**(): *Promise*<[*IThemeConfOverriding*](ithemeconfoverriding.md)[]\>

List available skins.

**Returns:** *Promise*<[*IThemeConfOverriding*](ithemeconfoverriding.md)[]\>

Defined in: [src/ts/configure/interfaces.ts:149](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L149)

___

### listThemes

▸ **listThemes**(): *Promise*<[*IThemeDesc*](ithemedesc.md)[]\>

List available themes.

**Returns:** *Promise*<[*IThemeDesc*](ithemedesc.md)[]\>

Defined in: [src/ts/configure/interfaces.ts:143](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L143)

___

### onFullyReady

▸ **onFullyReady**(): *Promise*<[*ITheme*](itheme.md)\>

Await for theme to be fully loaded (skin, overrides, degrees...).

**Returns:** *Promise*<[*ITheme*](itheme.md)\>

Defined in: [src/ts/configure/interfaces.ts:134](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L134)

___

### onOverrideReady

▸ **onOverrideReady**(): *Promise*<[*IThemeOverrides*](../modules.md#ithemeoverrides)\>

Await for overrides conf to be loaded.

**Returns:** *Promise*<[*IThemeOverrides*](../modules.md#ithemeoverrides)\>

Defined in: [src/ts/configure/interfaces.ts:140](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L140)

___

### onSkinReady

▸ **onSkinReady**(): *Promise*<[*ITheme*](itheme.md)\>

Await for skin conf to be loaded.

**Returns:** *Promise*<[*ITheme*](itheme.md)\>

Defined in: [src/ts/configure/interfaces.ts:137](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L137)

___

### setDefaultTheme

▸ **setDefaultTheme**(`theme`: [*IThemeDesc*](ithemedesc.md)): *void*

Configure UI with this theme by default.

#### Parameters:

Name | Type |
:------ | :------ |
`theme` | [*IThemeDesc*](ithemedesc.md) |

**Returns:** *void*

Defined in: [src/ts/configure/interfaces.ts:146](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L146)
