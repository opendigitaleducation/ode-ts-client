[ode-ts-client](../README.md) / [Exports](../modules.md) / ITransportFramework

# Interface: ITransportFramework

## Table of contents

### Properties

- [http](itransportframework.md#http)

### Methods

- [newHttpInstance](itransportframework.md#newhttpinstance)

## Properties

### http

• `Readonly` **http**: [*IHttp*](ihttp.md)

Default instance.

Defined in: [src/ts/transport/interfaces.ts:15](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/transport/interfaces.ts#L15)

## Methods

### newHttpInstance

▸ **newHttpInstance**(`params?`: *any*): [*IHttp*](ihttp.md)

Creates a new IHttp object with a custom configuration;

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`params?` | *any* | see available options at https://axios-http.com/docs/req_config    |

**Returns:** [*IHttp*](ihttp.md)

Defined in: [src/ts/transport/interfaces.ts:21](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/transport/interfaces.ts#L21)
