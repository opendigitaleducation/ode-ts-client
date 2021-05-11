[ode-ts-client](../README.md) / [Exports](../modules.md) / IExplorerFramework

# Interface: IExplorerFramework

Framework exploration capabilities offered to the client.

## Table of contents

### Methods

- [createContext](iexplorerframework.md#createcontext)
- [getBus](iexplorerframework.md#getbus)

## Methods

### createContext

▸ **createContext**(`types`: [*ResourceType*](../modules.md#resourcetype)[], `app`: [*App*](../modules.md#app)): [*IExplorerContext*](iexplorercontext.md)

Create a new context to explore resources from an application.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`types` | [*ResourceType*](../modules.md#resourcetype)[] | Types of resource to be managed in this context.   |
`app` | [*App*](../modules.md#app) | Application which creates the new context.    |

**Returns:** [*IExplorerContext*](iexplorercontext.md)

Defined in: [explore/interfaces.ts:335](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L335)

___

### getBus

▸ **getBus**(): [*IBus*](ibus.md)

Retrieve the underlying communication bus.

**Returns:** [*IBus*](ibus.md)

Defined in: [explore/interfaces.ts:340](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L340)
