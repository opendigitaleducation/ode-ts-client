const { ExplorerFrameworkFactory } = require("../dist/index");

/** Test the fundations of the framework. */
describe("Foundation", function() {
    var framework = null;

    beforeEach( ()=>{
        framework = ExplorerFrameworkFactory.instance;
    });

    /** @test framework bootstrapping */
    it("should be defined", () => {
        expect(framework).toBeDefined();
    });

    /** @test framework initialization */
    it("should not throw error", ()=>{
        framework.framework.framework
    })
});
