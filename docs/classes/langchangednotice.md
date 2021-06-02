[ode-ts-client](../README.md) / [Exports](../modules.md) / LangChangedNotice

# Class: LangChangedNotice

## Implements

- [INotice](../interfaces/inotice.md)

## Table of contents

### Constructors

- [constructor](langchangednotice.md#constructor)

### Properties

- [eventName](langchangednotice.md#eventname)
- [newLanguage](langchangednotice.md#newlanguage)
- [oldLanguage](langchangednotice.md#oldlanguage)

## Constructors

### constructor

• **new LangChangedNotice**(`oldLanguage`, `newLanguage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldLanguage` | `string` |
| `newLanguage` | `string` |

#### Defined in

[notify/interfaces.ts:61](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L61)

## Properties

### eventName

• `Readonly` **eventName**: [EventName](../modules.md#eventname)

#### Implementation of

[INotice](../interfaces/inotice.md).[eventName](../interfaces/inotice.md#eventname)

#### Defined in

[notify/interfaces.ts:61](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L61)

___

### newLanguage

• **newLanguage**: `string`

___

### oldLanguage

• **oldLanguage**: `string`
