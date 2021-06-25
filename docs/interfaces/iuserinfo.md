[ode-ts-client](../README.md) / [Exports](../modules.md) / IUserInfo

# Interface: IUserInfo

## Table of contents

### Properties

- [apps](iuserinfo.md#apps)
- [authorizedActions](iuserinfo.md#authorizedactions)
- [birthDate](iuserinfo.md#birthdate)
- [children](iuserinfo.md#children)
- [childrenIds](iuserinfo.md#childrenids)
- [classNames](iuserinfo.md#classnames)
- [classes](iuserinfo.md#classes)
- [deletePending](iuserinfo.md#deletepending)
- [externalId](iuserinfo.md#externalid)
- [federated](iuserinfo.md#federated)
- [federatedIDP](iuserinfo.md#federatedidp)
- [firstName](iuserinfo.md#firstname)
- [forceChangePassword](iuserinfo.md#forcechangepassword)
- [functions](iuserinfo.md#functions)
- [groupsIds](iuserinfo.md#groupsids)
- [hasApp](iuserinfo.md#hasapp)
- [hasPw](iuserinfo.md#haspw)
- [lastName](iuserinfo.md#lastname)
- [level](iuserinfo.md#level)
- [login](iuserinfo.md#login)
- [needRevalidateTerms](iuserinfo.md#needrevalidateterms)
- [optionEnabled](iuserinfo.md#optionenabled)
- [preferences](iuserinfo.md#preferences)
- [sessionMetadata](iuserinfo.md#sessionmetadata)
- [structureNames](iuserinfo.md#structurenames)
- [structures](iuserinfo.md#structures)
- [type](iuserinfo.md#type)
- [uai](iuserinfo.md#uai)
- [userId](iuserinfo.md#userid)
- [username](iuserinfo.md#username)
- [widgets](iuserinfo.md#widgets)

## Properties

### apps

• **apps**: [IWebApp](iwebapp.md)[]

#### Defined in

[session/interfaces.ts:82](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L82)

___

### authorizedActions

• **authorizedActions**: [IWorkflowAuth](iworkflowauth.md)[]

#### Defined in

[session/interfaces.ts:83](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L83)

___

### birthDate

• **birthDate**: `string`

#### Defined in

[session/interfaces.ts:84](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L84)

___

### children

• **children**: `any`

#### Defined in

[session/interfaces.ts:85](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L85)

___

### childrenIds

• **childrenIds**: `string`[]

#### Defined in

[session/interfaces.ts:86](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L86)

___

### classNames

• **classNames**: `string`[]

#### Defined in

[session/interfaces.ts:87](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L87)

___

### classes

• **classes**: `any`[]

#### Defined in

[session/interfaces.ts:88](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L88)

___

### deletePending

• **deletePending**: `boolean`

#### Defined in

[session/interfaces.ts:89](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L89)

___

### externalId

• **externalId**: `string`

#### Defined in

[session/interfaces.ts:90](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L90)

___

### federated

• `Optional` **federated**: `any`

#### Defined in

[session/interfaces.ts:91](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L91)

___

### federatedIDP

• `Optional` **federatedIDP**: `any`

#### Defined in

[session/interfaces.ts:92](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L92)

___

### firstName

• **firstName**: `string`

#### Defined in

[session/interfaces.ts:93](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L93)

___

### forceChangePassword

• `Optional` **forceChangePassword**: `any`

#### Defined in

[session/interfaces.ts:94](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L94)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADMIN_LOCAL?` | `Object` |
| `ADMIN_LOCAL.code` | `string` |
| `ADMIN_LOCAL.scope` | `string`[] |
| `SUPER_ADMIN` | `Object` |
| `SUPER_ADMIN.code` | `string` |
| `SUPER_ADMIN.scope` | `string`[] |

#### Defined in

[session/interfaces.ts:95](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L95)

___

### groupsIds

• **groupsIds**: `string`[]

#### Defined in

[session/interfaces.ts:96](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L96)

___

### hasApp

• **hasApp**: `boolean`

#### Defined in

[session/interfaces.ts:97](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L97)

___

### hasPw

• **hasPw**: `boolean`

#### Defined in

[session/interfaces.ts:98](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L98)

___

### lastName

• **lastName**: `string`

#### Defined in

[session/interfaces.ts:99](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L99)

___

### level

• **level**: `string`

#### Defined in

[session/interfaces.ts:100](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L100)

___

### login

• **login**: `string`

#### Defined in

[session/interfaces.ts:101](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L101)

___

### needRevalidateTerms

• **needRevalidateTerms**: `any`

#### Defined in

[session/interfaces.ts:102](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L102)

___

### optionEnabled

• **optionEnabled**: `any`[]

#### Defined in

[session/interfaces.ts:103](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L103)

___

### preferences

• `Optional` **preferences**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `save` | (`pref`: `any`, `data`: `any`) => `void` |

#### Defined in

[session/interfaces.ts:104](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L104)

___

### sessionMetadata

• **sessionMetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `userId` | `string` |

#### Defined in

[session/interfaces.ts:105](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L105)

___

### structureNames

• **structureNames**: `string`[]

#### Defined in

[session/interfaces.ts:106](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L106)

___

### structures

• **structures**: `string`[]

#### Defined in

[session/interfaces.ts:107](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L107)

___

### type

• **type**: ``"ENSEIGNANT"`` \| ``"ELEVE"`` \| ``"PERSRELELEVE"`` \| ``"SUPERADMIN"`` \| ``"PERSEDUCNAT"``

#### Defined in

[session/interfaces.ts:108](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L108)

___

### uai

• **uai**: `any`[]

#### Defined in

[session/interfaces.ts:109](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L109)

___

### userId

• **userId**: `string`

#### Defined in

[session/interfaces.ts:110](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L110)

___

### username

• **username**: `string`

#### Defined in

[session/interfaces.ts:111](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L111)

___

### widgets

• **widgets**: [IWidgetModel](iwidgetmodel.md)[]

#### Defined in

[session/interfaces.ts:112](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/session/interfaces.ts#L112)
