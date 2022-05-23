function solve(arr, sortCriteria) {

  function splitLine(line) {
    return line.split('|');
  }

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  function converToTIcket([destination, price, status]) {
    return new Ticket(destination, Number(price), status);
  }

  const sortMapper = {
    'destination': (a, b) => a.destination.localeCompare(b.destination),
    'price': (a, b) => a.price - b.price,
    'status': (a, b) => a.status.localeCompare(b.status),
  }

  return arr.map(splitLine).map(converToTIcket).sort(sortMapper[sortCriteria]);
}

console.log(solve(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination'
))
