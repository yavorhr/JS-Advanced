let pizzUni = require('./solution');
let { assert } = require('chai');

//no pizza
let obj = {
    orderedDrink: 'Pepsi'
}
//valid input
let pizzaPlusDrink = {
    orderedPizza: 'Chilli',
    orderedDrink: 'Pepsi'
}

//valid input
let onlyPizza = {
    orderedPizza: 'Chilli',
}


describe("Tests …", function () {
    describe("makeAnOrder", function () {
        let obj = {};
        it("invalidOrder", function () {
            assert.throw(() => pizzUni.makeAnOrder(obj), 'You must order at least 1 Pizza to finish the order.');
        });
        it("validOrder", function () {
            assert.equal(pizzUni.makeAnOrder(pizzaPlusDrink), 'You just ordered Chilli and Pepsi.');
            assert.equal(pizzUni.makeAnOrder(onlyPizza), 'You just ordered Chilli');
        });
    });
    describe("getRemainingWork", function () {
        let arr = [{ pizzaName: 'Chilli', status: 'preparing' }];
        let arrTwo = [{ pizzaName: 'Chilli', status: 'ready' }];

        it("notReady", function () {
            assert.equal(pizzUni.getRemainingWork(arr), `The following pizzas are still preparing: Chilli.`)
        });
        it("ready", function () {
            assert.equal(pizzUni.getRemainingWork(arrTwo), 'All orders are complete!')
        });

        // TODO: …
    });
    describe("orderType", function () {
        it("delivery", function () {
            assert.equal(pizzUni.orderType(10, 'Delivery'), 10)
        });
        it("carryOut", function () {
            assert.equal(pizzUni.orderType(10, 'Carry Out'), 9)
        });

        // TODO: …
    });
});
