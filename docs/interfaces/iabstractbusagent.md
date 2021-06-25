[ode-ts-client](../README.md) / [Exports](../modules.md) / IAbstractBusAgent

# Interface: IAbstractBusAgent

Inner representation of an agent, from the bus' perspective.

## Hierarchy

- [IBusAgent](ibusagent.md)

  ↳ **IAbstractBusAgent**

## Implemented by

- [AbstractBusAgent](../classes/abstractbusagent.md)

## Table of contents

### Methods

- [activate](iabstractbusagent.md#activate)
- [initialize](iabstractbusagent.md#initialize)

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

#### Inherited from

[IBusAgent](ibusagent.md).[activate](ibusagent.md#activate)

#### Defined in

[explore/interfaces.ts:467](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/interfaces.ts#L467)

___

### initialize

▸ **initialize**(`res`, `action`): `Promise`<[IAbstractBusAgent](iabstractbusagent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [ResourceType](../modules.md#resourcetype) |
| `action` | [ActionType](../modules.md#actiontype) |

#### Returns

`Promise`<[IAbstractBusAgent](iabstractbusagent.md)\>

#### Defined in

[explore/Agent.ts:14](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/explore/Agent.ts#L14)
