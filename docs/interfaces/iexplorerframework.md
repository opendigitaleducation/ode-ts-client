[ode-ts-client](../README.md) / [Exports](../modules.md) / IExplorerFramework

# Interface: IExplorerFramework

## Table of contents

### Methods

- [createContext](iexplorerframework.md#createcontext)
- [getBus](iexplorerframework.md#getbus)

## Methods

### createContext

▸ **createContext**(`types`: [*ResourceType*](../modules.md#resourcetype)[], `app`: [*App*](../modules.md#app)): [*IExplorerContext*](iexplorercontext.md)

Instancie un contexte d'exploration .

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`types` | [*ResourceType*](../modules.md#resourcetype)[] | Types de ressources traitées par l'agent, minimum 1.   |
`app` | [*App*](../modules.md#app) | Application à l'origine de l'appel.    |

**Returns:** [*IExplorerContext*](iexplorercontext.md)

Defined in: [interfaces.ts:311](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L311)

___

### getBus

▸ **getBus**(): [*IBus*](ibus.md)

Retrieve the underlying communication bus.

**Returns:** [*IBus*](ibus.md)

Defined in: [interfaces.ts:316](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/interfaces.ts#L316)
