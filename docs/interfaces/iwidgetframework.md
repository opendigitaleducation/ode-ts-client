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

[widget/interfaces.ts:42](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L42)

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

[widget/interfaces.ts:36](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L36)

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

[widget/interfaces.ts:45](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L45)

___

### saveUserPrefs

▸ **saveUserPrefs**(): `Promise`<any\>

Save user preferences

#### Returns

`Promise`<any\>

#### Defined in

[widget/interfaces.ts:39](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/interfaces.ts#L39)
