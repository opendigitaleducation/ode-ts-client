[ode-ts-client](../README.md) / [Exports](../modules.md) / ISession

# Interface: ISession

## Table of contents

### Properties

- [currentLanguage](isession.md#currentlanguage)
- [description](isession.md#description)
- [notLoggedIn](isession.md#notloggedin)
- [user](isession.md#user)

### Methods

- [hasRight](isession.md#hasright)
- [hasWorkflow](isession.md#hasworkflow)

## Properties

### currentLanguage

• `Readonly` **currentLanguage**: `string`

#### Defined in

[session/interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L22)

___

### description

• `Readonly` **description**: [IUserDescription](iuserdescription.md)

#### Defined in

[session/interfaces.ts:24](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L24)

___

### notLoggedIn

• `Readonly` **notLoggedIn**: `boolean`

#### Defined in

[session/interfaces.ts:23](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L23)

___

### user

• `Readonly` **user**: [IUserInfo](iuserinfo.md)

#### Defined in

[session/interfaces.ts:25](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L25)

## Methods

### hasRight

▸ **hasRight**(`resource`, `right`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `any` |
| `right` | `any` |

#### Returns

`boolean`

#### Defined in

[session/interfaces.ts:28](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L28)

___

### hasWorkflow

▸ **hasWorkflow**(`workflowName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowName` | `string` |

#### Returns

`boolean`

#### Defined in

[session/interfaces.ts:27](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L27)
