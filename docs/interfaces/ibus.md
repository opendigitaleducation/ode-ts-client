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

Defined in: [interfaces.ts:474](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L474)

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

Defined in: [interfaces.ts:480](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L480)

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

Defined in: [interfaces.ts:477](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L477)
