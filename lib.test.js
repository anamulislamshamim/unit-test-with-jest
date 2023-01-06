const userInfo = require("./lib");


test("testing generate result", () =>{
    expect(userInfo("117", "Shamim")).toBe("117 & Shamim");
})