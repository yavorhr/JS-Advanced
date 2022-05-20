const lookupChar = require('./charLookUp');
const { assert } = require('chai');

//If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
//If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
//If both parameters have correct types and values - return the character at the specified index in the string.


describe('lookUpChar', () => {
    it('undefind params', () => {
        assert.isUndefined(lookupChar(1, 0));
    })

    it('undefind params', () => {
        assert.isUndefined(lookupChar('a', 1.2));
    })
    it('undefind params', () => {
        assert.isUndefined(lookupChar('a', 'a'));
    })

    it('invalid incorrect length', () => {
        assert.equal(lookupChar('abc', 4), 'Incorrect index');
        assert.equal(lookupChar('abc', -1), 'Incorrect index');
    })

    it('works correct', () => {
        assert.equal(lookupChar('abc', 0), 'a');
        assert.equal(lookupChar('abc', 1), 'b');
    })
})