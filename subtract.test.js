const subtract = require("./subtract");

test("Properly subtracts b from a", () => {
    expect(subtract(5,3)).toBe(2);
})