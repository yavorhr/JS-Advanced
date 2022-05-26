let { ChristmasMovies } = require('./02. Christmas Movies_Resources.js');
const { assert } = require('chai');

describe("Tests …", function () {
    describe("Instantiation", function () {
        it("CorrectProperties", function () {
            let christmas = new ChristmasMovies();
            assert.equal((christmas.movieCollection.length), 0);
        });
    });
    // TODO: …
});
