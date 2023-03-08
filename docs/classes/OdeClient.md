[ode-ts-client](../README.md) / [Exports](../modules.md) / OdeClient

# Class: OdeClient

## Table of contents

### Constructors

- [constructor](OdeClient.md#constructor)

### Properties

- [configure](OdeClient.md#configure)
- [explorer](OdeClient.md#explorer)
- [http](OdeClient.md#http)
- [notify](OdeClient.md#notify)
- [session](OdeClient.md#session)

### Methods

- [initialize](OdeClient.md#initialize)
- [mount](OdeClient.md#mount)

## Constructors

### constructor

• **new OdeClient**()

## Properties

### configure

• **configure**: [`IConfigurationFramework`](../interfaces/IConfigurationFramework.md)

___

### explorer

• **explorer**: [`IExplorerFramework`](../interfaces/IExplorerFramework.md)

___

### http

• **http**: [`IHttp`](../interfaces/IHttp.md)

___

### notify

• **notify**: [`INotifyFramework`](../interfaces/INotifyFramework.md)

___

### session

• **session**: [`ISessionFramework`](../interfaces/ISessionFramework.md)

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

▸ **mount**(`params?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `IParams` | IParams initialize sessionFramework and configurationFramework can be use on any framework (React, Vue, ...) |

#### Returns

`Promise`<`void`\>
