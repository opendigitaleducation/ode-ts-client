[ode-ts-client](../README.md) / [Exports](../modules.md) / AbstractBusAgent

# Class: AbstractBusAgent

Manage a generic RESOURCE

## Implements

* [*IBusAgent*](../interfaces/ibusagent.md)

## Table of contents

### Constructors

- [constructor](abstractbusagent.md#constructor)

### Properties

- [handlerFor](abstractbusagent.md#handlerfor)
- [managedResource](abstractbusagent.md#managedresource)
- [defaultHandler](abstractbusagent.md#defaulthandler)

### Methods

- [activate](abstractbusagent.md#activate)
- [getHandler](abstractbusagent.md#gethandler)
- [initialize](abstractbusagent.md#initialize)
- [registerHandlers](abstractbusagent.md#registerhandlers)
- [setHandler](abstractbusagent.md#sethandler)

## Constructors

### constructor

\+ **new AbstractBusAgent**(`managedResource`: [*ResourceType*](../modules.md#resourcetype)): [*AbstractBusAgent*](abstractbusagent.md)

#### Parameters:

Name | Type |
:------ | :------ |
`managedResource` | [*ResourceType*](../modules.md#resourcetype) |

**Returns:** [*AbstractBusAgent*](abstractbusagent.md)

Defined in: [src/ts/explore/Agent.ts:10](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L10)

## Properties

### handlerFor

• `Protected` **handlerFor**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`comment` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`copy` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`create` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`delete` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`export` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`initialize` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`manage` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`move` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`open` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`print` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`properties` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`publish` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`search` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |
`share` | (`parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)) => *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\> |

Defined in: [src/ts/explore/Agent.ts:20](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L20)

___

### managedResource

• `Protected` **managedResource**: [*ResourceType*](../modules.md#resourcetype)

Type of resource this agent can manage.

Defined in: [src/ts/explore/Agent.ts:16](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L16)

___

### defaultHandler

▪ `Static` `Protected` **defaultHandler**: IHandler

Defined in: [src/ts/explore/Agent.ts:17](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L17)

## Methods

### activate

▸ **activate**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)): *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\>

Ask this agent to resolve an action.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`parameters` | [*IActionParameters*](../interfaces/iactionparameters.md) |

**Returns:** *Promise*<[*IActionResult*](../interfaces/iactionresult.md)\>

Implementation of: [IBusAgent](../interfaces/ibusagent.md)

Defined in: [src/ts/explore/Agent.ts:56](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L56)

___

### getHandler

▸ `Protected`**getHandler**(`action`: [*ActionType*](../modules.md#actiontype)): IHandler

#### Parameters:

Name | Type |
:------ | :------ |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** IHandler

Defined in: [src/ts/explore/Agent.ts:49](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L49)

___

### initialize

▸ `Protected`**initialize**(): *void*

**Returns:** *void*

Defined in: [src/ts/explore/Agent.ts:37](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L37)

___

### registerHandlers

▸ `Protected` `Abstract`**registerHandlers**(): *void*

Override to register handlers for actions this agent support.

**Returns:** *void*

Defined in: [src/ts/explore/Agent.ts:54](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L54)

___

### setHandler

▸ `Protected`**setHandler**(`action`: [*ActionType*](../modules.md#actiontype), `handler`: IHandler): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | [*ActionType*](../modules.md#actiontype) |
`handler` | IHandler |

**Returns:** *void*

Defined in: [src/ts/explore/Agent.ts:44](https://github.com/opendigitaleducation/ode-ts-client/blob/b81969a/src/ts/explore/Agent.ts#L44)
