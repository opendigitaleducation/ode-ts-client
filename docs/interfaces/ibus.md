[ode-ts-client](../README.md) / [Exports](../modules.md) / IBus

# Interface: IBus

## Table of contents

### Methods

- [consumer](ibus.md#consumer)
- [getAgentFor](ibus.md#getagentfor)
- [send](ibus.md#send)

## Methods

### consumer

▸ **consumer**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `agent`: [*IBusAgent*](ibusagent.md)): *void*

Allows registering an agent as being able to resolve 1 or more action on a type of resource.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`agent` | [*IBusAgent*](ibusagent.md) |

**Returns:** *void*

Defined in: [explore/interfaces.ts:455](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L455)

___

### getAgentFor

▸ **getAgentFor**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): *null* \| [*IBusAgent*](ibusagent.md)

Utility function for retrieving an agent.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** *null* \| [*IBusAgent*](ibusagent.md)

Defined in: [explore/interfaces.ts:461](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L461)

___

### send

▸ **send**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `parameters`: [*IActionParameters*](iactionparameters.md)): *Promise*<[*IActionResult*](iactionresult.md)\>

Allows delegating an action on a type of resource, to a registered agent on the bus.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`parameters` | [*IActionParameters*](iactionparameters.md) |

**Returns:** *Promise*<[*IActionResult*](iactionresult.md)\>

Defined in: [explore/interfaces.ts:458](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/interfaces.ts#L458)
