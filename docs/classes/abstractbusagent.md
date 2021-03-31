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

Defined in: [foundation/Agent.ts:21](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L21)

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

Defined in: [foundation/Agent.ts:31](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L31)

___

### initialized

• `Protected` **initialized**: *boolean*= false

Defined in: [foundation/Agent.ts:27](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L27)

___

### managedResource

• `Protected` **managedResource**: [*ResourceType*](../modules.md#resourcetype)

Type of resource this agent can manage.

Defined in: [foundation/Agent.ts:26](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L26)

___

### defaultHandler

▪ `Static` `Protected` **defaultHandler**: IHandler

Defined in: [foundation/Agent.ts:28](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L28)

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

Defined in: [foundation/Agent.ts:81](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L81)

___

### canHandle

▸ `Protected`**canHandle**(`res`: [*ResourceType*](../modules.md#resourcetype), `action`: [*ActionType*](../modules.md#actiontype)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`res` | [*ResourceType*](../modules.md#resourcetype) |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** *boolean*

Defined in: [foundation/Agent.ts:60](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L60)

___

### getHandler

▸ `Protected`**getHandler**(`action`: [*ActionType*](../modules.md#actiontype)): IHandler

#### Parameters:

Name | Type |
:------ | :------ |
`action` | [*ActionType*](../modules.md#actiontype) |

**Returns:** IHandler

Defined in: [foundation/Agent.ts:57](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L57)

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

Defined in: [foundation/Agent.ts:67](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L67)

___

### registerHandlers

▸ `Protected` `Abstract`**registerHandlers**(): *void*

Override to register handlers for actions this agent support.

**Returns:** *void*

Defined in: [foundation/Agent.ts:65](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L65)

___

### resetHandlers

▸ `Protected`**resetHandlers**(): *void*

**Returns:** *void*

Defined in: [foundation/Agent.ts:48](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L48)

___

### setHandler

▸ `Protected`**setHandler**(`action`: [*ActionType*](../modules.md#actiontype), `handler`: IHandler): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | [*ActionType*](../modules.md#actiontype) |
`handler` | IHandler |

**Returns:** *void*

Defined in: [foundation/Agent.ts:53](https://github.com/opendigitaleducation/infrontexplore/blob/1e962a2/src/ts/foundation/Agent.ts#L53)
