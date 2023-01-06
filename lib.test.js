const {userInfo, validateInput, checkAndGenerate} = require("./lib");

// unit test for string generator function
test("testing generate result function", () =>{
    expect(userInfo("117", "Shamim")).toBe("117 & Shamim");
});

// unit test for validateInput
test("testing validateInput funciton", () => {
    expect(validateInput(1, true, true)).toBeTruthy();
});

// integration testing
test("testing the checkandgenerate function", () => {
    expect(checkAndGenerate(1,"Title 1", "This is a integration test")).toBe("User ID: 1 created an article titled Title 1")
});