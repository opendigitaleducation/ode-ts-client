[ode-ts-client](../README.md) / [Exports](../modules.md) / HttpErrorNotice

# Class: HttpErrorNotice

## Implements

- [INotice](../interfaces/inotice.md)

## Table of contents

### Constructors

- [constructor](httperrornotice.md#constructor)

### Properties

- [eventName](httperrornotice.md#eventname)
- [status](httperrornotice.md#status)
- [text](httperrornotice.md#text)

## Constructors

### constructor

• **new HttpErrorNotice**(`status`, `text?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `string` |
| `text?` | `string` |

#### Defined in

[notify/interfaces.ts:71](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L71)

## Properties

### eventName

• `Readonly` **eventName**: [EventName](../modules.md#eventname)

#### Implementation of

[INotice](../interfaces/inotice.md).[eventName](../interfaces/inotice.md#eventname)

#### Defined in

[notify/interfaces.ts:71](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L71)

___

### status

• **status**: `string`

___

### text

• `Optional` **text**: `string`
