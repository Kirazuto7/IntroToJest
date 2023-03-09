const divide = require('./divide');

test('divide 20 by 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
});