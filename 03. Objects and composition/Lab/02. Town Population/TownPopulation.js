function solve(arr) {
  const towns = {};

  let tuples = Object.entries(arr);

  for (let e of tuples) {
    const string = e[1];
    let [name, popStr] = string.split(" <-> ");
    let population = Number(popStr);

    if (!towns[name]) {
      towns[name] = population;
    } else {
      towns[name] += population;
    }
  }

  for (const key in towns) {
    console.log(`${key} : ${towns[key]}`);
  }
}

solve(['Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000']
);

