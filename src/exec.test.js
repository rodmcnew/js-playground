const exec = require("./exec");

describe('index.js main()', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(exec(1, 2)).toBe(3);
    })
});