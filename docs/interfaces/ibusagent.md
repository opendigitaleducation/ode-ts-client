[ode-ts-client](../README.md) / [Exports](../modules.md) / IBusAgent

# Interface: IBusAgent

## Hierarchy

* **IBusAgent**

  ↳ [*IAbstractBusAgent*](iabstractbusagent.md)

## Table of contents

### Methods

- [activate](ibusagent.md#activate)

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

Defined in: [interfaces.ts:487](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L487)
