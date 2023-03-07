[ode-ts-client](../README.md) / [Exports](../modules.md) / OdeClient

# Class: OdeClient

## Table of contents

### Constructors

- [constructor](OdeClient.md#constructor)

### Properties

- [\_configure](OdeClient.md#_configure)
- [\_explorer](OdeClient.md#_explorer)
- [\_http](OdeClient.md#_http)
- [\_notify](OdeClient.md#_notify)
- [\_session](OdeClient.md#_session)

### Methods

- [initialize](OdeClient.md#initialize)
- [mount](OdeClient.md#mount)

## Constructors

### constructor

• **new OdeClient**()

## Properties

### \_configure

• **\_configure**: [`IConfigurationFramework`](../interfaces/IConfigurationFramework.md)

___

### \_explorer

• **\_explorer**: [`IExplorerFramework`](../interfaces/IExplorerFramework.md)

___

### \_http

• **\_http**: [`IHttp`](../interfaces/IHttp.md)

___

### \_notify

• **\_notify**: [`INotifyFramework`](../interfaces/INotifyFramework.md)

___

### \_session

• **\_session**: [`ISessionFramework`](../interfaces/ISessionFramework.md)

## Methods

### initialize

▸ **initialize**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `IParams` | IParams initialize the current app and the current theme |

#### Returns

`Promise`<`any`\>

___

### mount

▸ **mount**(`params`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `IParams` | IParams initialize sessionFramework and configurationFramework can be use on any framework (React, Vue, ...) |

#### Returns

`Promise`<`void`\>
