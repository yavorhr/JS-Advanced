function solve(inputArray) {
  let products = {};
  let result = [];

  while (inputArray.length) {
    let currentSale = inputArray.shift();
    let [townName, productName, productPrice] = currentSale.split(" | ");
    productPrice = Number(productPrice);

    if (!products.hasOwnProperty(productName)) {
      products[productName] = {};
    }
    products[productName][townName] = productPrice;
  }

  for (const key in products) {
    let townsSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
    let cheapestTown = townsSorted[0];
    result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
  }

  return result.join("\n");
}

console.log(
  solve([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);


