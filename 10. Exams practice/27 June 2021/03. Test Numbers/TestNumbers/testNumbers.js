const { assert } = require('chai');
const testNumbers = require('../test');

describe("sumNumbers", function () {
    it("sum numbers", function () {
        //Assert
        assert.equal(testNumbers.sumNumbers(1, 2), 3.00);
        assert.equal(testNumbers.sumNumbers(1.1, 2.3), 3.40);
        assert.equal(testNumbers.sumNumbers(-2, -3), -5.00);
        assert.equal(testNumbers.sumNumbers(0, -3), -3.00);
    });

    it("check if parameters are numbers", function () {
        //Assert
        assert.equal(testNumbers.sumNumbers('s', 2), undefined);
        assert.equal(testNumbers.sumNumbers('s', '2'), undefined);
        assert.equal(testNumbers.sumNumbers(1.1, {}), undefined);
    });
});

describe("numberChecker", function () {
    it("check if parameter is number", function () {
        assert.throw(() => testNumbers.numberChecker('s'), 'The input is not a number!');
    });

    it("check evenOrOdd", function () {
        assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
    });
});

describe("averageSumArray", function () {
    let array = [1, 2, 3];

    it("returns avg", function () {
        assert.equal(testNumbers.averageSumArray(array), 2);
    });

});

