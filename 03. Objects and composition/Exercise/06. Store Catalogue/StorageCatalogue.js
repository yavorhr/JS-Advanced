function solve(inputArray) {
  let productsCatalogue = {};

  for (i = 0; i < inputArray.length; i++) {
    let [productName, productPrice] = inputArray[i].split(' : ');
    let initial = productName[0].toUpperCase();

    if (productsCatalogue[initial] === undefined) {
      productsCatalogue[initial] = {};
    }
    productsCatalogue[initial][productName] = productPrice;
  }

  let result = [];
  let initialSorted = Object.keys(productsCatalogue).sort((a, b) => a.localeCompare(b));
  for (const key of initialSorted) {
    let products = Object.entries(productsCatalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
    result.push(key);
    let productsAsStrings = products.map(x => `${x[0]}: ${x[1]}`).join('\n');
    result.push(productsAsStrings);
  }
  return result.join('\n');
};

console.log(
  solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);

