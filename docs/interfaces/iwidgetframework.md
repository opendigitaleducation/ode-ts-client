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

• `Readonly` **list**: [*IWidget*](iwidget.md)[]

List widgets that are visible to the connected user.

Defined in: [src/ts/widget/interfaces.ts:43](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/widget/interfaces.ts#L43)

## Methods

### initialize

▸ **initialize**(`version`: *null* \| *string*, `cdnDomain`: *null* \| *string*): *Promise*<void\>

Loads the widget configuration.

#### Parameters:

Name | Type |
:------ | :------ |
`version` | *null* \| *string* |
`cdnDomain` | *null* \| *string* |

**Returns:** *Promise*<void\>

Defined in: [src/ts/widget/interfaces.ts:37](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/widget/interfaces.ts#L37)

___

### lookup

▸ **lookup**(`widgetName`: *string*): *undefined* \| [*IWidget*](iwidget.md)

Retrieve a widget by name.

#### Parameters:

Name | Type |
:------ | :------ |
`widgetName` | *string* |

**Returns:** *undefined* \| [*IWidget*](iwidget.md)

Defined in: [src/ts/widget/interfaces.ts:46](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/widget/interfaces.ts#L46)

___

### saveUserPrefs

▸ **saveUserPrefs**(): *Promise*<any\>

Save user preferences

**Returns:** *Promise*<any\>

Defined in: [src/ts/widget/interfaces.ts:40](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/widget/interfaces.ts#L40)
