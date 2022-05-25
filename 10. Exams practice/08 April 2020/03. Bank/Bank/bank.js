class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        //[{firstName, lastName, personalId},{}...]
    }

    newCustomer(customer) {
        //{firstName, lastName, personalId}
        if (this.allCustomers.find(c => c.firstName == customer.firstName && c.lastName == customer.lastName && c.personalId == customer.personalId) == false) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(customerId, sum) {
        let personalId = Number(customerId);
        let amount = Number(sum);

        const index = this.allCustomers.findIndex(
            (e) => e.personalId == customerId
        );
        if (index < 0) {
            throw new Error(`We have no customer with this ID!`);
        }

        const person = this.allCustomers.find(c => c.personalId == personalId);

        person.totalMoney
            ? person.totalMoney += amount
            : person.totalMoney = amount

        const currentTransaction = `${person.firstName} ${person.lastName} made deposit of ${amount}$!`;

        person.transactions
            ? person.transactions.unshift(currentTransaction)
            : person.transactions = [currentTransaction];

        return `${person.totalMoney}$`;
    };

    withdrawMoney(id, sum) {
        let personalId = Number(id);
        let amount = Number(sum);

        if (this.allCustomers.find(c => c.personalId == personalId) == false) {
            throw new Error('We have no customer with this ID!');
        }

        const person = this.allCustomers.find(c => c.personalId == personalId);

        if (person.totalMoney >= amount) {
            const currentTransaction = `${person.firstName} ${person.lastName} withdrew ${amount}$!`
            person.transactions.unshift(currentTransaction);
            person.totalMoney -= amount;
            return `${person.totalMoney}$`;
        }

        throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
    }
    
    customerInfo(id) {
        let personalId = Number(id);

        if (this.allCustomers.find(c => c.personalId == personalId) == false) {
            throw new Error('We have no customer with this ID!');
        }

        const person = this.allCustomers.find(c => c.personalId == personalId);

        return [`Bank name: ${this._bankName}`,
        `Customer name: ${person.firstName} ${person.lastName}`,
        `Customer ID: ${person.personalId}`,
        `Total Money: ${person.totalMoney}$`,
            'Transactions:',
        `${person.transactions.map((transaction, i, arr) => `${arr.length - i}. ${transaction}`)
            .join('\n')}`
        ].join('\n')
    }
}

let bank = new Bank('SoftUni Bank');
console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));