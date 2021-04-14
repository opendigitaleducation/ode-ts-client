ode-ts-client / [Exports](modules.md)

# ode-ts-client

Client-side definition and implementation of the resources explorer API.

## Documentation

[Browse the full API documentation](docs/modules.md)

## Usage

Example for the Blog application :

```typescript
import { framework, IExplorerContext, APP, RESOURCE, ISearchParameters, IContext, GetResourcesResult } from "ode-ts-client";
/* ... */
const explorer:IExplorerContext = framework.createContext( [RESOURCE.BLOG], APP.BLOG );
const searchParams:ISearchParameters = explorer.searchParameters;
/*... tweak searchParams if needed...*/
const context:IContext = await explorer.initialize();
/* Use context. It contains the first results page, and the available filters, preferences... */

/*... tweak searchParams if needed (paging)...*/
explorer.getResources().then( (result:GetResourcesResult) => {
    /* Use result */
});
```

It is also possible to observe (RxJS) the resultsets asynchronously, as they are generated :
```typescript
import { Subscription } from "rxjs";
/* ... */
let subscription:Subscription = explorer.latestResources().subscribe({
    next: result => { 
        /* Use result.output */;
    }
});
/* ...later...*/
if( subscription ) {
    subscription.unsubscribe();
}
```
