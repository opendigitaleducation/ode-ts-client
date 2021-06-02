[ode-ts-client](../README.md) / [Exports](../modules.md) / IHttp

# Interface: IHttp

## Table of contents

### Properties

- [latestResponse](ihttp.md#latestresponse)

### Methods

- [delete](ihttp.md#delete)
- [deleteJson](ihttp.md#deletejson)
- [get](ihttp.md#get)
- [getScript](ihttp.md#getscript)
- [loadScript](ihttp.md#loadscript)
- [post](ihttp.md#post)
- [postFile](ihttp.md#postfile)
- [postJson](ihttp.md#postjson)
- [put](ihttp.md#put)
- [putJson](ihttp.md#putjson)

## Properties

### latestResponse

• `Readonly` **latestResponse**: [IHttpResponse](../modules.md#ihttpresponse)

Latest available HTTP response, valid during your get|post|put...then() and catch() handlers.

#### Defined in

[transport/interfaces.ts:28](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L28)

## Methods

### delete

▸ **delete**<T, R\>(`url`, `params?`): `Promise`<R\>

HTTP DELETE

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:57](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L57)

___

### deleteJson

▸ **deleteJson**<T, R\>(`url`, `json`): `Promise`<R\>

HTTP DELETE, Accept: application/json

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `json` | `any` |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:60](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L60)

___

### get

▸ **get**<R\>(`url`, `params?`): `Promise`<R\>

HTTP GET Accept: application/json

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:31](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L31)

___

### getScript

▸ **getScript**<R\>(`url`, `params?`, `exportedVariableName?`): `Promise`<R\>

HTTP GET, Accept: application/javascript

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |
| `exportedVariableName?` | `string` |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:66](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L66)

___

### loadScript

▸ **loadScript**(`url`, `params?`): `Promise`<void\>

HTTP GET, Accept: application/javascript

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<void\>

#### Defined in

[transport/interfaces.ts:69](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L69)

___

### post

▸ **post**<R\>(`url`, `data?`, `params?`): `Promise`<R\>

HTTP POST, Accept: application/json

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:34](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L34)

___

### postFile

▸ **postFile**<R\>(`url`, `data`, `params?`): `Promise`<R\>

HTTP POST

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | - |
| `data` | `any` | must be of one of the following types: string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams Browser only: FormData, File, Blob Node only: Stream, Buffer |
| `params?` | [IHttpParams](../modules.md#ihttpparams) | - |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:43](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L43)

___

### postJson

▸ **postJson**<T, R\>(`url`, `json`, `params?`): `Promise`<R\>

HTTP POST, Accept: application/json, Content-type: application/json

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `json` | `any` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:46](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L46)

___

### put

▸ **put**<T, R\>(`url`, `data?`, `params?`): `Promise`<R\>

HTTP PUT, Accept: application/json

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:49](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L49)

___

### putJson

▸ **putJson**<T, R\>(`url`, `json`, `params?`): `Promise`<R\>

HTTP PUT, Accept: application/json, Content-type: application/json

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |
| `R` | `R` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `json` | `any` |
| `params?` | [IHttpParams](../modules.md#ihttpparams) |

#### Returns

`Promise`<R\>

#### Defined in

[transport/interfaces.ts:54](https://github.com/opendigitaleducation/infrontexplore/blob/0e8281d/src/ts/transport/interfaces.ts#L54)
