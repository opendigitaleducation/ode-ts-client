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

___

### addBundle

▸ **addBundle**(`path`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

___

### addBundlePromise

▸ **addBundlePromise**(`path`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<void\>

___

### addKeys

▸ **addKeys**(`keys`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *any* |

**Returns:** *void*

___

### addTranslations

▸ **addTranslations**(`folder`: *string*, `callback?`: [*AddBundleCallback*](../modules.md#addbundlecallback)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`folder` | *string* |
`callback?` | [*AddBundleCallback*](../modules.md#addbundlecallback) |

**Returns:** *void*

___

### removeAccents

▸ **removeAccents**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

___

### translate

▸ **translate**(`key`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *string*
