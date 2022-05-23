function solve(arr) {
    let splitted = [];

    for (let i = 0; i < arr.length; i++) {
        splitted.push(arr[i].split(' | '));
    }

    let storage = new Map();

    for (let i = 0; i < splitted.length; i++) {
        let cars = splitted[i];

        let [brand, model, quantity] = cars;
        if (!storage.has(brand)) {
            storage.set(brand, new Map());
        }

        if (!storage.get(brand).has(model)) {
            storage.get(brand).set(model, 0);
        }
        let value = Number(storage.get(brand).get(model));
        storage.get(brand).set(model, value + Number(quantity));
    }

    let resultString = [];
    for ([brand, model] of storage.entries()) {
        let result = `${brand}\n`;
        for (let [name, quantity] of model.entries()) {
            result += `###${name} -> ${quantity}\n`;
        }
        resultString.push(result.trim());
    }
    return resultString.join('\n');
}
