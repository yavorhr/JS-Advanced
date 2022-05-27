const dealership = require('./solution');
const { assert } = require('chai');

describe("Dealership …", function () {
    describe("returnOldCarr", function () {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }
        it("getDiscountForOldCar", function () {
            assert.equal(dealership.newCarCost('Audi A6 4K', 30000), 10000);
        });
        it("noDiscount", function () {
            assert.equal(dealership.newCarCost('Audi TT', 30000), 30000);
        });
    });
    describe("carEquipment", function () {
        let extras = ['heated seats', 'sliding roof'];
        let indexes = [0];
        let result = ['heated seats'];
        it("getExtras", function () {
            assert.deepEqual(dealership.carEquipment(extras, indexes), result)
        });
    })
    describe("euroCategory", function () {
        it("category>4", function () {
            assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`)
        })
        it("category<4", function () {
            assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`)
        })
        // TODO: …
    })
})
