const isOddOrEven = require('./demo');
const { assert } = require('chai');
//whether the length of a passed in string is even or odd.
//If the passed parameter is NOT a string return undefined. If the parameter is a string return either "even" or "odd" based on the length of the string.
describe('isOddOrEven', () => {

    it('String length is even length', () => {
        assert.equal(isOddOrEven('as'), ('even'));
    })

    it('String length is odd length', () => {
        assert.equal(isOddOrEven('asd'), ('odd'));
    })

    it('String param is undefined', () => {
        assert.isUndefined(isOddOrEven(1));
    })
})
