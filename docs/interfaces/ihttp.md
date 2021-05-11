[ode-ts-client](../README.md) / [Exports](../modules.md) / IHttp

# Interface: IHttp

## Table of contents

### Properties

- [latestResponse](ihttp.md#latestresponse)

### Methods

- [delete](ihttp.md#delete)
- [deleteJson](ihttp.md#deletejson)
- [get](ihttp.md#get)
- [post](ihttp.md#post)
- [postFile](ihttp.md#postfile)
- [postJson](ihttp.md#postjson)
- [put](ihttp.md#put)
- [putJson](ihttp.md#putjson)

## Properties

### latestResponse

• `Readonly` **latestResponse**: [*IHttpResponse*](../modules.md#ihttpresponse)

Defined in: [transport/interfaces.ts:11](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L11)

## Methods

### delete

▸ **delete**<T, R\>(`url`: *string*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:19](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L19)

___

### deleteJson

▸ **deleteJson**<T, R\>(`url`: *string*, `json`: *any*): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`json` | *any* |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L20)

___

### get

▸ **get**<T, R\>(`url`: *string*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:12](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L12)

___

### post

▸ **post**<T, R\>(`url`: *string*, `data?`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`data?` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:13](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L13)

___

### postFile

▸ **postFile**<T, R\>(`url`: *string*, `data`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`data` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:14](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L14)

___

### postJson

▸ **postJson**<T, R\>(`url`: *string*, `json`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`json` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:15](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L15)

___

### put

▸ **put**<T, R\>(`url`: *string*, `data?`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`data?` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:16](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L16)

___

### putJson

▸ **putJson**<T, R\>(`url`: *string*, `json`: *any*, `params?`: [*IHttpParams*](../modules.md#ihttpparams)): *Promise*<R\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |
`R` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`json` | *any* |
`params?` | [*IHttpParams*](../modules.md#ihttpparams) |

**Returns:** *Promise*<R\>

Defined in: [transport/interfaces.ts:18](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/transport/interfaces.ts#L18)
