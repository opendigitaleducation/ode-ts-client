[ode-ts-client](../README.md) / [Exports](../modules.md) / IBusAgent

# Interface: IBusAgent

## Hierarchy

- **IBusAgent**

  ↳ [IAbstractBusAgent](iabstractbusagent.md)

## Table of contents

### Methods

- [activate](ibusagent.md#activate)

## Methods

### activate

▸ **activate**(`res`, `action`, `parameters`): `Observable`<[IActionResult](iactionresult.md)\>

Ask this agent to resolve an action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [ResourceType](../modules.md#resourcetype) |
| `action` | [ActionType](../modules.md#actiontype) |
| `parameters` | [IActionParameters](iactionparameters.md) |

#### Returns

`Observable`<[IActionResult](iactionresult.md)\>

#### Defined in

[explore/interfaces.ts:467](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L467)
