class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        /*
   firstName: String,
   middleName: String,
   lastName: String
        */
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = { cardNumber: creditCard[0], expirationDate: creditCard[1], securityNumber: creditCard[2] };
        /*
    cardNumber: Number,
    expirationDate: String,
    securityNumber: Number
        */
        this.wishList = [];

        if (typeof creditCard[0] !== "number" || typeof creditCard[2] !== "number") {
            throw new Error("Invalid credit card details")
        }

        if (creditCard.length < 3) {
            throw new Error("Missing credit card information");
        }
    }

    set fullName(names) {
        if (names.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        };
        const allNames = `${names[0]} ${names[1]} ${names[2]}`;
        let pattern = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/g

        if (!pattern.test(allNames)) {
            throw new Error("Invalid full name");
        }
        return this._fullName = {
            firstName: names[0],
            middleName: names[1],
            lastName: names[2]
        };
    }

    get fullName() {
        return this._fullName;
    }

    generateIDNumber() {
        let result = 0;
        let firstName = this.fullName.firstName;
        let lastName = this.fullName.lastName;
        let ascii = Number(firstName[0].charCodeAt(0));
        result += 231 * ascii + 139 * Number(this.fullName.middleName.length);

        if (lastName[2].endsWith("a") || lastName[2].endsWith("e") || lastName[2].endsWith("o") ||
            lastName[2].endsWith("i") || lastName[2].endsWith("u")) {
            result += "8";
        } else {
            result += "7";
        }
        return result;
    }

    addCreditCardInfo(input) {
        let [cardNumber, expirationDate, securityNumber] = input;

        if (input.length !== 3) {
            throw new Error("Missing credit card information");
        };

        if (typeof cardNumber !== "number" || typeof securityNumber !== "number") {
            throw new Error("Invalid credit card details");
        }
        this.creditCard = { cardNumber, expirationDate, securityNumber };
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let result = [];

        result.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
            `ID Number: ${this.idNumber}`, `Wishlist:`, `${this.wishList.length === 0 ? "empty" : this.wishList.join(', ')}`,
            'Credit Card:', `Card Number: ${this.creditCard.cardNumber}`, `Expiration Date: ${this.creditCard.expirationDate}`,
            `Security Number: ${this.creditCard.securityNumber}`);

        return result.join('\n');
    }
}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
