class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        products.forEach(el => {
            let [productName, productQuantity, productTotalPrice] = el.split(' ');

            productQuantity = Number(productQuantity)
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        })

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {

        if (!this.menu[meal]) {
            let products = [];
            neededProducts.forEach(x => {
                let line = x.split(' ');
                let name = line[0];
                let quantity = Number(line[1]);

                let productInfo = {
                    name, quantity,
                }
                products.push(productInfo)

            })
            this.menu[meal] = {
                products,
                price,
            };
            let menu = Object.keys(this.menu);
            if (menu.length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            else if (menu.length == 0 || menu.length == 2 || menu.length > 2) {
                return `Great idea! Now with the ${meal} we have ${menu.length} meals in the menu, other ideas?`;
            }
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        let resultArr = [];
        for (const key in this.menu) {
            resultArr.push(`${key} - $ ${this.menu[key].price}`);
        }

        return resultArr.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let mealProducts = this.menu[meal].products;
        let availableProducts = Object.entries(this.stockProducts);
        let areAvailable = true;

        for (const product of mealProducts) {
            if (!availableProducts.some(([key, value]) => key == product.name)) {
                areAvailable = false;
            }
            if (availableProducts.some(([key, value]) => key == product.name)) {
                let currentProduct = availableProducts.find(([key, value]) => key == product.name);
                if (currentProduct[1] < product.quantity) {
                    areAvailable = false;
                }
            }
        }
        if (!areAvailable) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
        Object.keys(this.stockProducts).forEach(key => {
            if (mealProducts.some(mp => mp.name == key)) {
                let productInMenu = this.menu[meal].products.find(y => y.name == key);
                this.stockProducts[key] -= productInMenu.quantity;
            }
        })

        this.budgetMoney += this.menu[meal].price
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('Icecream', ['Yogurt 100', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Icecream'));

