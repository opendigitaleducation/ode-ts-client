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

• **apps**: [*IWebApp*](iwebapp.md)[]

Defined in: [src/ts/session/interfaces.ts:90](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L90)

___

### authorizedActions

• **authorizedActions**: [*IWorkflowAuth*](iworkflowauth.md)[]

Defined in: [src/ts/session/interfaces.ts:91](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L91)

___

### birthDate

• **birthDate**: *string*

Defined in: [src/ts/session/interfaces.ts:92](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L92)

___

### children

• **children**: *any*

Defined in: [src/ts/session/interfaces.ts:93](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L93)

___

### childrenIds

• **childrenIds**: *string*[]

Defined in: [src/ts/session/interfaces.ts:94](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L94)

___

### classNames

• **classNames**: *string*[]

Defined in: [src/ts/session/interfaces.ts:95](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L95)

___

### classes

• **classes**: *any*[]

Defined in: [src/ts/session/interfaces.ts:96](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L96)

___

### deletePending

• **deletePending**: *boolean*

Defined in: [src/ts/session/interfaces.ts:97](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L97)

___

### externalId

• **externalId**: *string*

Defined in: [src/ts/session/interfaces.ts:98](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L98)

___

### federated

• `Optional` **federated**: *any*

Defined in: [src/ts/session/interfaces.ts:99](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L99)

___

### federatedIDP

• `Optional` **federatedIDP**: *any*

Defined in: [src/ts/session/interfaces.ts:100](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L100)

___

### firstName

• **firstName**: *string*

Defined in: [src/ts/session/interfaces.ts:101](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L101)

___

### forceChangePassword

• `Optional` **forceChangePassword**: *any*

Defined in: [src/ts/session/interfaces.ts:102](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L102)

___

### functions

• **functions**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ADMIN_LOCAL`? | *object* |
`ADMIN_LOCAL.code` | *string* |
`ADMIN_LOCAL.scope` | *string*[] |
`SUPER_ADMIN` | *object* |
`SUPER_ADMIN.code` | *string* |
`SUPER_ADMIN.scope` | *string*[] |

Defined in: [src/ts/session/interfaces.ts:103](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L103)

___

### groupsIds

• **groupsIds**: *string*[]

Defined in: [src/ts/session/interfaces.ts:104](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L104)

___

### hasApp

• **hasApp**: *boolean*

Defined in: [src/ts/session/interfaces.ts:105](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L105)

___

### hasPw

• **hasPw**: *boolean*

Defined in: [src/ts/session/interfaces.ts:106](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L106)

___

### lastName

• **lastName**: *string*

Defined in: [src/ts/session/interfaces.ts:107](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L107)

___

### level

• **level**: *string*

Defined in: [src/ts/session/interfaces.ts:108](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L108)

___

### login

• **login**: *string*

Defined in: [src/ts/session/interfaces.ts:109](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L109)

___

### needRevalidateTerms

• **needRevalidateTerms**: *any*

Defined in: [src/ts/session/interfaces.ts:110](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L110)

___

### optionEnabled

• **optionEnabled**: *any*[]

Defined in: [src/ts/session/interfaces.ts:111](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L111)

___

### preferences

• `Optional` **preferences**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`save` | (`pref`: *any*, `data`: *any*) => *void* |

Defined in: [src/ts/session/interfaces.ts:112](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L112)

___

### sessionMetadata

• **sessionMetadata**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`_id` | *string* |
`userId` | *string* |

Defined in: [src/ts/session/interfaces.ts:113](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L113)

___

### structureNames

• **structureNames**: *string*[]

Defined in: [src/ts/session/interfaces.ts:114](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L114)

___

### structures

• **structures**: *string*[]

Defined in: [src/ts/session/interfaces.ts:115](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L115)

___

### type

• **type**: *ENSEIGNANT* \| *ELEVE* \| *PERSRELELEVE* \| *SUPERADMIN* \| *PERSEDUCNAT*

Defined in: [src/ts/session/interfaces.ts:116](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L116)

___

### uai

• **uai**: *any*[]

Defined in: [src/ts/session/interfaces.ts:117](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L117)

___

### userId

• **userId**: *string*

Defined in: [src/ts/session/interfaces.ts:118](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L118)

___

### username

• **username**: *string*

Defined in: [src/ts/session/interfaces.ts:119](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L119)

___

### widgets

• **widgets**: [*IWidgetModel*](iwidgetmodel.md)[]

Defined in: [src/ts/session/interfaces.ts:120](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/session/interfaces.ts#L120)
