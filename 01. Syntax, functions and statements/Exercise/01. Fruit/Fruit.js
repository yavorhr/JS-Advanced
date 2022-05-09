function solve(fruitType, grams, pricePerKg) {
    let budget = grams / 1000 * pricePerKg;
    console.log(`I need $${budget.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruitType}.`)
}

solve('orange', 2500, 1.80);
