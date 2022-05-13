function cityRecord(name, population, treasury) {

  const city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,

    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += Math.floor(percent / 100 * this.population);
    },
    applyRecession(percent) {
      this.treasury -= Math.ceil(this.treasury * percent / 100);
    }

  };
  return city;
}

const result = cityRecord(
  'Tortuga',
  7000,
  15000);

console.log(result);
