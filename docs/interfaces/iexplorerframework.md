[ode-ts-client](../README.md) / [Exports](../modules.md) / IExplorerFramework

# Interface: IExplorerFramework

Framework exploration capabilities offered to the client.

## Table of contents

### Methods

- [createContext](iexplorerframework.md#createcontext)
- [getBus](iexplorerframework.md#getbus)

## Methods

### createContext

▸ **createContext**(`types`, `app`): [IExplorerContext](iexplorercontext.md)

Create a new context to explore resources from an application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `types` | [ResourceType](../modules.md#resourcetype)[] | Types of resource to be managed in this context. |
| `app` | [App](../modules.md#app) | Application which creates the new context. |

#### Returns

[IExplorerContext](iexplorercontext.md)

#### Defined in

[explore/interfaces.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L22)

___

### getBus

▸ **getBus**(): [IBus](ibus.md)

Retrieve the underlying communication bus.

#### Returns

[IBus](ibus.md)

#### Defined in

[explore/interfaces.ts:27](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L27)
