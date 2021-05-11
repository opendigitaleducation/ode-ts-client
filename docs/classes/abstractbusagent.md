[ode-ts-client](../README.md) / [Exports](../modules.md) / AbstractBusAgent

# Class: AbstractBusAgent

Manage a generic RESOURCE

## Implements

* [*IAbstractBusAgent*](../interfaces/iabstractbusagent.md)

## Table of contents

### Constructors

- [constructor](abstractbusagent.md#constructor)

### Properties

- [handlerFor](abstractbusagent.md#handlerfor)
- [initialized](abstractbusagent.md#initialized)
- [managedResource](abstractbusagent.md#managedresource)
- [defaultHandler](abstractbusagent.md#defaulthandler)

### Methods

- [activate](abstractbusagent.md#activate)
- [canHandle](abstractbusagent.md#canhandle)
- [getHandler](abstractbusagent.md#gethandler)
- [initialize](abstractbusagent.md#initialize)
- [registerHandlers](abstractbusagent.md#registerhandlers)
- [resetHandlers](abstractbusagent.md#resethandlers)
- [setHandler](abstractbusagent.md#sethandler)

## Constructors

### constructor

\+ **new AbstractBusAgent**(`managedResource`: [*ResourceType*](../modules.md#resourcetype)): [*AbstractBusAgent*](abstractbusagent.md)

#### Parameters:

Name | Type |
:------ | :------ |
`managedResource` | [*ResourceType*](../modules.md#resourcetype) |

**Returns:** [*AbstractBusAgent*](abstractbusagent.md)

Defined in: [explore/Agent.ts:22](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L22)

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

Defined in: [explore/Agent.ts:32](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L32)

___

### initialized

• `Protected` **initialized**: *boolean*= false

Defined in: [explore/Agent.ts:28](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L28)

___

### managedResource

• `Protected` **managedResource**: [*ResourceType*](../modules.md#resourcetype)

Type of resource this agent can manage.

Defined in: [explore/Agent.ts:27](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L27)

___

### defaultHandler

▪ `Static` `Protected` **defaultHandler**: IHandler

Defined in: [explore/Agent.ts:29](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L29)

## Methods

### activate

▸ **activate**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype), `parameters`: [*IActionParameters*](../interfaces/iactionparameters.md)): *Observable*<[*IActionResult*](../interfaces/iactionresult.md)\>

Ask this agent to resolve an action.

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |
`parameters` | [*IActionParameters*](../interfaces/iactionparameters.md) |

**Returns:** *Observable*<[*IActionResult*](../interfaces/iactionresult.md)\>

Implementation of: [IAbstractBusAgent](../interfaces/iabstractbusagent.md)

Defined in: [explore/Agent.ts:82](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L82)

___

### canHandle

▸ `Protected`**canHandle**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** *boolean*

Defined in: [explore/Agent.ts:61](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L61)

___

### getHandler

▸ `Protected`**getHandler**(`action`: [*ActionType*](../modules.md#actiontype)): IHandler

#### Parameters:

Name | Type |
:------ | :------ |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** IHandler

Defined in: [explore/Agent.ts:58](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L58)

___

### initialize

▸ **initialize**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): *Promise*<[*IAbstractBusAgent*](../interfaces/iabstractbusagent.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** *Promise*<[*IAbstractBusAgent*](../interfaces/iabstractbusagent.md)\>

Implementation of: [IAbstractBusAgent](../interfaces/iabstractbusagent.md)

Defined in: [explore/Agent.ts:68](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L68)

___

### registerHandlers

▸ `Protected` `Abstract`**registerHandlers**(): *void*

Override to register handlers for actions this agent support.

**Returns:** *void*

Defined in: [explore/Agent.ts:66](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L66)

___

### resetHandlers

▸ `Protected`**resetHandlers**(): *void*

**Returns:** *void*

Defined in: [explore/Agent.ts:49](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L49)

___

### setHandler

▸ `Protected`**setHandler**(`action`: [*ActionType*](../modules.md#actiontype), `handler`: IHandler): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | [*ActionType*](../modules.md#actiontype) |
`handler` | IHandler |

**Returns:** *void*

Defined in: [explore/Agent.ts:54](https://github.com/opendigitaleducation/infrontexplore/blob/08d2f8c/src/ts/explore/Agent.ts#L54)
