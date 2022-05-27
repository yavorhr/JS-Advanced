class ChristmasDinner {
    constructor(budget) {
        this.budget = Number(budget);
        //[{ recipeName, productsList[]}, {}...)];
        this.dishes = [];
        this.products = [];
        //{ {guestName}: {dish},{...}.. }
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping([product, price]) {
        if (Number(price) > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.budget -= Number(price);
        this.products.push(product);
        return `You have successfully bought ${product}!`
    }
    
    recipes({ recipeName, productsList }) {
        if (productsList.some(p => this.products.includes(p) == false)) {
            throw new Error("We do not have this product");
        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        //ако за някой от dishesh проверката долу е вярна, т.е. (d.recipeName == dish) == false, хвърляме грешка
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error("We do not have this dish");
        } else if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    //{ {Ivan}: {Ushav} } 
    showAttendance() {
        let result = [];
        Object.entries(this.guests)
            .forEach(([guest, recipe]) => { result.push(`${guest} will eat ${recipe}, which consists of ${this.dishes.find(d => d.recipeName == recipe).productsList.join(', ')}`) });
        return result.join('\n');
    };
}

let dinner = new ChristmasDinner(300);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.showAttendance());
