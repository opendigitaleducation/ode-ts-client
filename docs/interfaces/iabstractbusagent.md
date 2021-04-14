[ode-ts-client](../README.md) / [Exports](../modules.md) / IAbstractBusAgent

# Interface: IAbstractBusAgent

Inner representation of an agent, from the bus' perspective.

## Hierarchy

* [*IBusAgent*](ibusagent.md)

  ↳ **IAbstractBusAgent**

## Implemented by

* [*AbstractBusAgent*](../classes/abstractbusagent.md)

## Table of contents

### Methods

- [activate](iabstractbusagent.md#activate)
- [initialize](iabstractbusagent.md#initialize)

## Methods

### activate

▸ **activate**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `parameters`: [*IActionParameters*](iactionparameters.md)): *Observable*<[*IActionResult*](iactionresult.md)\>

Ask this agent to resolve an action.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`parameters` | [*IActionParameters*](iactionparameters.md) |

**Returns:** *Observable*<[*IActionResult*](iactionresult.md)\>

Inherited from: [IBusAgent](ibusagent.md)

Defined in: [interfaces.ts:487](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L487)

___

### initialize

▸ **initialize**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): *Promise*<[*IAbstractBusAgent*](iabstractbusagent.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** *Promise*<[*IAbstractBusAgent*](iabstractbusagent.md)\>

Defined in: [foundation/Agent.ts:13](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/foundation/Agent.ts#L13)
