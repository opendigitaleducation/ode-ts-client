[ode-ts-client](../README.md) / [Exports](../modules.md) / IIdiom

# Interface: IIdiom

## Table of contents

### Methods

- [addBundle](iidiom.md#addbundle)
- [addBundlePromise](iidiom.md#addbundlepromise)
- [addKeys](iidiom.md#addkeys)
- [addTranslations](iidiom.md#addtranslations)
- [removeAccents](iidiom.md#removeaccents)
- [translate](iidiom.md#translate)

## Methods

### addBundle

▸ **addBundle**(`path`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

Defined in: [configure/interfaces.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L20)

___

### addBundlePromise

▸ **addBundlePromise**(`path`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [configure/interfaces.ts:19](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L19)

___

### addKeys

▸ **addKeys**(`keys`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *any* |

**Returns:** *void*

Defined in: [configure/interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L22)

___

### addTranslations

▸ **addTranslations**(`folder`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`folder` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

Defined in: [configure/interfaces.ts:21](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L21)

___

### removeAccents

▸ **removeAccents**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

Defined in: [configure/interfaces.ts:23](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L23)

___

### translate

▸ **translate**(`key`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *string*

Defined in: [configure/interfaces.ts:18](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/configure/interfaces.ts#L18)
