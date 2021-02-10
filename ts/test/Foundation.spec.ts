import "jasmine";
import { APP, framework, RESOURCE } from "../src/index";

/** Test the fundations of the framework. */
describe("Foundation", function() {
    var context = null;

    beforeEach( ()=>{
        // nada ATM
    });

    /** @test framework bootstrapping */
    it("should be defined", () => {
        expect(framework).toBeDefined();
    });

    /** @test framework initialization */
    it("should not throw error", ()=>{
        context = framework.createContext( [RESOURCE.BLOG], APP.ANY );
    });
});
