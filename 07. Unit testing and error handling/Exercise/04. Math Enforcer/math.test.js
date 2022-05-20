const mathEnforcer = require('./math');
const { assert } = require('chai');


/*•	addFive(num) - A function that accepts a single parameter:
o	If the parameter is NOT a number, the funtion should return undefined.
o	If the parameter is a number, add 5 to it, and return the result.
•	subtractTen(num) - A function that accepts a single parameter:
o	If the parameter is NOT a number, the function should return undefined.
o	If the parameter is a number, subtract 10 from it, and return the result.
•	sum(num1, num2) - A function that accepts two parameters:
*/

describe('mathEnforcer', () => {

    describe('add', () => {
        it('is not a number', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        })
        it('add five correct', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(1), 6);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
        })
    })
    describe('subtract', () => {
        it('is not a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        })
        it('subtract ten correct', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(15), 5);
        })
    })
    describe('sum', () => {
        it('is not a numbers params', () => {
            assert.isUndefined(mathEnforcer.sum('a', 1));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        })
        it('is not a numbers params', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1, -1), 0);
            assert.equal(mathEnforcer.sum(1, 0), 1);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.equal(mathEnforcer.sum(1.2, 1.3), 2.5);
            assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5);
            assert.equal(mathEnforcer.sum(1.3, -1.2), 0.10000000000000009);
        })
    })
})