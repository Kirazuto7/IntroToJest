const multiply = require('./multiply');

test('multiply 2 and 6 to equal 12', () => {
    expect(multiply(2, 6)).toBe(12);
});