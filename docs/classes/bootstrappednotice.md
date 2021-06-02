[ode-ts-client](../README.md) / [Exports](../modules.md) / BootstrappedNotice

# Class: BootstrappedNotice

Notified when the current session is bootstrapped, or when an error prevent it.

## Implements

- [INotice](../interfaces/inotice.md)

## Table of contents

### Constructors

- [constructor](bootstrappednotice.md#constructor)

### Properties

- [eventName](bootstrappednotice.md#eventname)
- [failureText](bootstrappednotice.md#failuretext)
- [userInfo](bootstrappednotice.md#userinfo)

## Constructors

### constructor

• **new BootstrappedNotice**(`userInfo?`, `failureText?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userInfo?` | [IUserInfo](../interfaces/iuserinfo.md) |
| `failureText?` | `string` |

#### Defined in

[notify/interfaces.ts:84](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L84)

## Properties

### eventName

• `Readonly` **eventName**: [EventName](../modules.md#eventname)

#### Implementation of

[INotice](../interfaces/inotice.md).[eventName](../interfaces/inotice.md#eventname)

#### Defined in

[notify/interfaces.ts:84](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/notify/interfaces.ts#L84)

___

### failureText

• `Optional` **failureText**: `string`

___

### userInfo

• `Optional` **userInfo**: [IUserInfo](../interfaces/iuserinfo.md)
