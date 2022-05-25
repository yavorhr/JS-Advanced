let { Repository } = require("./solution.js");
const { assert } = require('chai');

describe("Initialize", function () {
    const properties = {
        name: 'string',
        age: 'number',
        birthday: 'object',
    };

    // valid
    const entity1 = {
        name: 'Gosho',
        age: 22,
        birthday: new Date(1998, 0, 7),
    };

    // valid
    const entity2 = {
        name: 'Peter',
        age: 37,
        birthday: new Date(1984, 3, 17),
    };

    // invalid
    const entity4 = {
        name1: 'Stamat',
        age: 29,
        birthday: new Date(1991, 0, 21),
    };

    // invalid
    const entity5 = {
        name: 'Stamat',
        age: '29',
        birthday: new Date(1991, 0, 21),
    };

    const entity6 = {
        name: 'Stamat',
        age: 29,
        birthday: 1991
    };


    it("Instantiation", function () {
        const repository = new Repository(properties);
        assert.equal(repository.props, properties);
        assert.equal((new Repository().props), undefined);
        assert.equal((repository.props.name), 'string');
        assert.equal((repository.props.age), 'number');
        assert.equal((repository.props.birthday), 'object');
        assert.deepEqual((repository.data), new Map());
        assert.deepEqual((repository.data.size), 0);
        assert.equal((repository.count), 0);
        assert.equal((repository.nextId()), 0)
        assert.equal((repository.nextId()), 1)
        assert.deepEqual(repository.data, new Map());
        assert.equal((typeof repository.nextId), 'function');
    });

    it("add", function () {
        const repo = new Repository(properties);
        assert.equal(repo.add(entity1), 0);
        assert.equal((repo.data.size), 1);
        assert.equal(repo.add(entity2), 1);
        assert.equal((repo.data.size), 2);
        assert.equal(repo.nextId(), 2);
        assert.equal(repo.data.get(0), entity1);
        assert.equal(repo.data.get(1), entity2);

        assert.throw(() => repo.add(entity4), `Property name is missing from the entity!`);
        assert.throw(() => repo.add(entity5), `Property age is not of correct type!`);
        assert.throw(() => repo.add(entity6), `Property birthday is not of correct type!`);

    });

    it("addThrowErrors", function () {
        const repo = new Repository(properties);
        assert.throw(() => repo.add(entity4), `Property name is missing from the entity!`);
        assert.throw(() => repo.add(entity5), `Property age is not of correct type!`);
        assert.throw(() => repo.add(entity6), `Property birthday is not of correct type!`);
    });

    it("update", function () {
        const repo = new Repository(properties);
        repo.add(entity1);
        repo.update(0, entity2);
        assert.equal(repo.getId(0), entity2);
    });


    it("updateThrowErrors", () => {
        const repo = new Repository(properties);
        repo.add(entity1);
        repo.update(0, entity2);
        assert.throw(() => repo.update(3, entity2), `Entity with id: 3 does not exist!`)
        assert.throw(() => repo.update(-1, entity2), `Entity with id: -1 does not exist!`)
        assert.throw(() => repo.update(0, entity4), 'Property name is missing from the entity!')
        assert.throw(() => repo.update(0, entity5), 'Property age is not of correct type!')
        assert.throw(() => repo.update(0, entity6), 'Property birthday is not of correct type!')
    });

    it('get id', () => {
        const repo = new Repository(properties);
        repo.add(entity1);
        assert.equal(repo.getId(0), entity1);
        assert.throw(() => repo.getId(5), 'Entity with id: 5 does not exist!');
    })

    it('del', () => {
        // testing the method 'del' with valid and invalid entity
        const repo = new Repository(properties);
        repo.add(entity1);
        assert.throw(() => repo.del(9)), `Entity with id: 9 does not exist!`;
        repo.del(0);
        assert.equal((repo.data.size), 0);
        assert.throw(() => repo.del(0)), `Entity with id: 0 does not exist!`;
        assert.equal((repo.data.size), 0);
    });

    it('getCount', () => {
        const repo = new Repository(properties);
        repo.add(entity1);
        assert.equal((repo.data.size), 1)
    });
});

