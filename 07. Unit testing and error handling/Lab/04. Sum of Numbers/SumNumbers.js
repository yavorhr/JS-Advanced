const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('sums  multiple numbers', () => {
        expect(sum([1, 1])).to.equal(2);
    });

    it('sums  different numbers', () => {
        expect(sum([1, 1, 2, 4])).to.equal(8);
    });
})
