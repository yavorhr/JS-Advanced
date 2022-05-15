function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    const input = document.querySelector('#inputs>textarea');
    const bestRestaurantP = document.querySelector('#bestRestaurant>p');
    const bestRestWorkersP = document.querySelector('#workers>p')
 
    function onClick() {
       //За да получим Input като истински обект-масив, трябва да го parse-нем :
       const arrInput = JSON.parse(input.value);
 
       let restaurants = {};
 
       arrInput.forEach(line => {
          const tokens = line.split(' - ');
          const name = tokens[0];
          const workersArr = tokens[1].split(', ');
 
          let workers = [];
 
          for (let currentWorker of workersArr) {
             const tokens = currentWorker.split(' ');
             const salary = Number(tokens[1]);
             workers.push({ name: tokens[0], salary });
          }
 
          if (restaurants[name]) {
             workers = workers.concat(restaurants[name].workers);
          }
 
          workers.sort((firstWorker, secondWorker) => secondWorker.salary - firstWorker.salary);
          const bestSalary = workers[0].salary;
          const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
 
          restaurants[name] = {
             workers,
             averageSalary,
             bestSalary
          }
       })
 
       let bestRestaurantSalary = 0;
       let bestRestaurant = undefined;
 
       for (const name in restaurants) {
          if (restaurants[name].averageSalary > bestRestaurantSalary) {
             bestRestaurant = {
                name,
                workers: restaurants[name].workers,
                bestSalary: restaurants[name].bestSalary,
                averageSalary: restaurants[name].averageSalary
             }
             bestRestaurantSalary = restaurants[name].averageSalary;
          }
       }
 
       bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
 
       let workersResult = [];
       bestRestaurant.workers.forEach(worker => {
          workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
       })
 
       bestRestWorkersP.textContent = workersResult.join(" ");
    }
 }
 