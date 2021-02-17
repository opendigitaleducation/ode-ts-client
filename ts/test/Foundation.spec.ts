import "jasmine";
import * as UserInfoData from './mocks/data/userinfo.json';
import { APP, framework, IContext, IExplorerContext, RESOURCE } from "../src/index";
import { ExplorerFramework } from "../src/foundation/ExplorerFramework";
import { MockedAgentLoader } from "./mocks/agents/MockedAgentLoader";

/** Test the fundations of the framework. */
describe("Foundation", function() {
    var context:IExplorerContext|null = null;
    const userinfo = UserInfoData;

    /** Utility function */
    let getModel = ():IContext => {
        let model = context?.getContext();
        if( typeof model==="undefined" )
            throw new Error("Context seems undefined.");
        return model;
    }

    beforeAll( async () => {
        context = framework.createContext( [RESOURCE.FOLDER], APP.BLOG );
        (framework as ExplorerFramework).setAgentLoader( new MockedAgentLoader() );
        await context?.initialize();
    });
    beforeEach( async () => {
    });

    // Specs (it) are reset to the initial state with beforeEach() above, and executed independently from each other.
    it("list and create folders", async ()=>{
        expect( getModel().folders ).toBeInstanceOf(Array);
        expect( getModel().folders.length ).toBe(0);

        const result = await context?.createFolder( RESOURCE.FOLDER, "default", "Root folder 1");
        expect(result).toBeDefined();
        expect(result?.name).toBe("Root folder 1");
        if( !!result ) getModel().folders.push( result );

        expect( getModel().folders.length ).toBe(1);
    });
    
//    it("", ()=>{});

//    it("", ()=>{});

});
