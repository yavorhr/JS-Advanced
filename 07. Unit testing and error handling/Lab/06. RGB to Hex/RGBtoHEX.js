//Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
//Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//Return undefined if any of the input parameters are of invalid type or not in the expected range

const { expect } = require('chai');
const rgbToHexColor = require('./rgb');

describe('RGBtoHEX', () => {
    it('converts black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('returns undefined for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.equal(undefined);
    });

    it('returns undefined for negative pvalues', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    });

    it('returns undefined for values > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    });
})
