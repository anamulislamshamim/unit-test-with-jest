const puppeteer = require('puppeteer');
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

// end to end (e2e) testing for addPost();
// remember: all of puppeteer functionality is async:
test("End to end test of AddPost function", async (done) => {
    const browser = puppeteer.launch({
        headless: true,
        slowMo:80,
        args:["--window-size=1920,1080"]
    });
    const page = (await browser).newPage();
    // (await page).goto("http://localhost:3000");
    (await page).click('input#userid');
    (await page).type('input#userid',"1");
    (await page).click('input#title');
    (await page).type('input#title',"Dor cycle Muita ashi!");
    (await page).click('input#article');
    (await page).type('input#article',"1");
    done();
}, 20000);