[ode-ts-client](../README.md) / [Exports](../modules.md) / IIdiom

# Interface: IIdiom

## Table of contents

### Methods

- [addAllTranslations](iidiom.md#addalltranslations)
- [addBundle](iidiom.md#addbundle)
- [addBundlePromise](iidiom.md#addbundlepromise)
- [addKeys](iidiom.md#addkeys)
- [addTranslations](iidiom.md#addtranslations)
- [removeAccents](iidiom.md#removeaccents)
- [translate](iidiom.md#translate)

## Methods

### addAllTranslations

▸ **addAllTranslations**(`folders`: *string*[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`folders` | *string*[] |

**Returns:** *Promise*<void\>

Defined in: [src/ts/configure/interfaces.ts:202](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L202)

___

### addBundle

▸ **addBundle**(`path`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

Defined in: [src/ts/configure/interfaces.ts:200](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L200)

___

### addBundlePromise

▸ **addBundlePromise**(`path`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/ts/configure/interfaces.ts:199](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L199)

___

### addKeys

▸ **addKeys**(`keys`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *any* |

**Returns:** *void*

Defined in: [src/ts/configure/interfaces.ts:203](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L203)

___

### addTranslations

▸ **addTranslations**(`folder`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`folder` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

Defined in: [src/ts/configure/interfaces.ts:201](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L201)

___

### removeAccents

▸ **removeAccents**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

Defined in: [src/ts/configure/interfaces.ts:204](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L204)

___

### translate

▸ **translate**(`key`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *string*

Defined in: [src/ts/configure/interfaces.ts:198](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/configure/interfaces.ts#L198)
