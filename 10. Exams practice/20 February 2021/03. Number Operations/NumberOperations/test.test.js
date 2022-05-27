const numberOperations = require('./test');
const { assert } = require('chai');


describe('powNumberWorks', () => {
    it('powNumber', () => {
        assert.equal(numberOperations.powNumber(3), 9);
    });
    it('powNumberWithNegativeNumbers', () => {
        assert.equal(numberOperations.powNumber(-2), 4);
    });
})


describe('numberChecker', () => {
    it('NaNinput', () => {
        assert.throw(() => numberOperations.numberChecker('s'), 'The input is not a number!');
    });
    it('lowerThan100positiveNumber', () => {
        assert.equal(numberOperations.numberChecker(2), 'The number is lower than 100!');
    });
    it('lowerThan100negativeNumber', () => {
        assert.equal(numberOperations.numberChecker(-20), 'The number is lower than 100!');
    });
    it('lowerThan100null', () => {
        assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
    });
    it('parseInputWorks', () => {
        assert.equal(numberOperations.numberChecker('2'), 'The number is lower than 100!');
    });
    it('higherNumberThan100', () => {
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
    });

});

describe('sumArrays', () => {
    it('sumArrayEvenLenghtsArrays', () => {
        let arr1 = [1, 1];
        let arr2 = [3, 3];
        let result = [4, 4];
        assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
    });
    it('sumArrayOddLengtshArrays', () => {
        let arr1 = [1, 1];
        let arr2 = [3, 3, 3];
        let result = [4, 4, 3];
        assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
    });


})