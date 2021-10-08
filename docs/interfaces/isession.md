[ode-ts-client](../README.md) / [Exports](../modules.md) / ISession

# Interface: ISession

## Table of contents

### Properties

- [avatarUrl](isession.md#avatarurl)
- [currentApp](isession.md#currentapp)
- [currentLanguage](isession.md#currentlanguage)
- [description](isession.md#description)
- [notLoggedIn](isession.md#notloggedin)
- [user](isession.md#user)

### Methods

- [hasRight](isession.md#hasright)
- [hasWorkflow](isession.md#hasworkflow)

## Properties

### avatarUrl

• `Readonly` **avatarUrl**: *string*

Get the connected user's avatar URL, or a default one.
Append a query parameter to this URL for it to get resized, for example "?thumbnail=48x48"

Defined in: [src/ts/session/interfaces.ts:30](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L30)

___

### currentApp

• `Readonly` **currentApp**: *null* \| [*App*](../modules.md#app)

Retrieve the current main app, @see ConfigureFramework.Platform.apps

Defined in: [src/ts/session/interfaces.ts:33](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L33)

___

### currentLanguage

• `Readonly` **currentLanguage**: *string*

Defined in: [src/ts/session/interfaces.ts:23](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L23)

___

### description

• `Readonly` **description**: [*IUserDescription*](iuserdescription.md)

Defined in: [src/ts/session/interfaces.ts:25](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L25)

___

### notLoggedIn

• `Readonly` **notLoggedIn**: *boolean*

Defined in: [src/ts/session/interfaces.ts:24](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L24)

___

### user

• `Readonly` **user**: [*IUserInfo*](iuserinfo.md)

Defined in: [src/ts/session/interfaces.ts:31](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L31)

## Methods

### hasRight

▸ **hasRight**(`resource`: *any*, `right`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`resource` | *any* |
`right` | *any* |

**Returns:** *boolean*

Defined in: [src/ts/session/interfaces.ts:36](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L36)

___

### hasWorkflow

▸ **hasWorkflow**(`workflowName`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`workflowName` | *string* |

**Returns:** *boolean*

Defined in: [src/ts/session/interfaces.ts:35](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L35)
