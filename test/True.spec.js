describe("AlwaysTrue", function() {
    beforeEach( ()=>{
        console.log( "Yeah it's true" );
    });

    it("is always true", () => {
        expect(true).toBe( true );
    });
});