[ode-ts-client](../README.md) / [Exports](../modules.md) / ISession

# Interface: ISession

## Table of contents

### Properties

- [currentLanguage](isession.md#currentlanguage)
- [description](isession.md#description)
- [notLoggedIn](isession.md#notloggedin)

### Methods

- [hasRight](isession.md#hasright)
- [hasWorkflow](isession.md#hasworkflow)

## Properties

### currentLanguage

• `Readonly` **currentLanguage**: `string`

#### Defined in

[session/interfaces.ts:21](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/session/interfaces.ts#L21)

___

### description

• `Readonly` **description**: [IUserDescription](iuserdescription.md)

#### Defined in

[session/interfaces.ts:23](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/session/interfaces.ts#L23)

___

### notLoggedIn

• `Readonly` **notLoggedIn**: `boolean`

#### Defined in

[session/interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/session/interfaces.ts#L22)

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

[session/interfaces.ts:26](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/session/interfaces.ts#L26)

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

[session/interfaces.ts:25](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/session/interfaces.ts#L25)
