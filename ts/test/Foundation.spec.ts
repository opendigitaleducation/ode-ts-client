import "jasmine";
import * as UserInfoData from './mocks/data/userinfo.json';
import { BehavioursMock } from './mocks/Behaviours.mock'
import { APP, framework, IExplorerContext, RESOURCE } from "../src/index";
import { IBehaviours } from "../src/legacy/Behaviours";

var Behaviours:IBehaviours = new BehavioursMock();

/** Test the fundations of the framework. */
describe("Foundation", function() {
    var context:IExplorerContext|null = null;
    const userinfo = UserInfoData;

    /** @test Mocked data */
    //FIXME validate against jsonschema ?
    it("should have mocked data", () => { expect(userinfo.apps).toBeDefined(); });

    /** @test Mocked functions */
    //FIXME validate against jsonschema ?
    it("should have mocked Behaviours", () => { expect(Behaviours).toBeDefined(); });

    /** @test Framework bootstrapping */
    it("should be available", () => { expect(framework).toBeDefined(); });

    /** @test Getting an explorer context. */
    it("should get a valid context without throwing an error", ()=>{
        context = framework.createContext( [RESOURCE.FOLDER], APP.BLOG );
        expect(context).toBeDefined();
    });

    /**  */
    it("should not crash", ()=>{
        context?.initialize().then( ctx => {
            expect(ctx).toBeDefined();
        });
    });
});
