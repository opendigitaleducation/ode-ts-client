[ode-ts-client](../README.md) / [Exports](../modules.md) / IWidgetFramework

# Interface: IWidgetFramework

## Table of contents

### Properties

- [list](iwidgetframework.md#list)

### Methods

- [initialize](iwidgetframework.md#initialize)
- [lookup](iwidgetframework.md#lookup)
- [saveUserPrefs](iwidgetframework.md#saveuserprefs)

## Properties

### list

• `Readonly` **list**: [IWidget](iwidget.md)[]

List widgets that are visible to the connected user.

#### Defined in

[widget/interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/widget/interfaces.ts#L22)

## Methods

### initialize

▸ **initialize**(`version`, `cdnDomain`): `Promise`<void\>

Loads the widget configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | ``null`` \| `string` |
| `cdnDomain` | ``null`` \| `string` |

#### Returns

`Promise`<void\>

#### Defined in

[widget/interfaces.ts:16](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/widget/interfaces.ts#L16)

___

### lookup

▸ **lookup**(`widgetName`): `undefined` \| [IWidget](iwidget.md)

Retrieve a widget by name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetName` | `string` |

#### Returns

`undefined` \| [IWidget](iwidget.md)

#### Defined in

[widget/interfaces.ts:25](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/widget/interfaces.ts#L25)

___

### saveUserPrefs

▸ **saveUserPrefs**(): `Promise`<any\>

Save user preferences

#### Returns

`Promise`<any\>

#### Defined in

[widget/interfaces.ts:19](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/widget/interfaces.ts#L19)
