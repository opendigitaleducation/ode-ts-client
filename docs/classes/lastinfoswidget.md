[ode-ts-client](../README.md) / [Exports](../modules.md) / LastInfosWidget

# Class: LastInfosWidget

## Table of contents

### Constructors

- [constructor](lastinfoswidget.md#constructor)

### Methods

- [getMaxResults](lastinfoswidget.md#getmaxresults)
- [loadInfos](lastinfoswidget.md#loadinfos)
- [setMaxResults](lastinfoswidget.md#setmaxresults)

## Constructors

### constructor

• **new LastInfosWidget**()

## Methods

### getMaxResults

▸ **getMaxResults**(): `Promise`<number\>

#### Returns

`Promise`<number\>

#### Defined in

[widget/LastInfos.widget.ts:20](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/LastInfos.widget.ts#L20)

___

### loadInfos

▸ **loadInfos**(`maxResults`): `Promise`<[ILastInfosModel](../interfaces/ilastinfosmodel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxResults` | `number` |

#### Returns

`Promise`<[ILastInfosModel](../interfaces/ilastinfosmodel.md)[]\>

#### Defined in

[widget/LastInfos.widget.ts:16](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/LastInfos.widget.ts#L16)

___

### setMaxResults

▸ **setMaxResults**(`maxResults`): `Promise`<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxResults` | `number` |

#### Returns

`Promise`<void\>

#### Defined in

[widget/LastInfos.widget.ts:26](https://github.com/opendigitaleducation/infrontexplore/blob/9b53f59/src/ts/widget/LastInfos.widget.ts#L26)
