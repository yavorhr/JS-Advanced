class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
    }
    /*
    The single rooms are 50 % of the given capacity
    The double rooms are 30 % of the given capacity
    The maisonette rooms are 20 % of the given capacity
*/
    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    rentARoom(clientName, roomType, nights) {
        let single = this.capacity * 0.5;
        let double = this.capacity * 0.3
        let maisonette = this.capacity * 0.2

        let rooms = {
            single: single,
            double: double,
            maisonette: maisonette
        }

        if (rooms[roomType] >= 1) {
            this.bookings.push({ clientName, roomType, nights, rent: `${this.currentBookingNumber}` });
            this.currentBookingNumber++;
            rooms[roomType] -= 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
        } else {
            let result = [];

            if (rooms[roomType] >= 1) {
                console.log(rooms[roomType])
            }

            return `No ${roomType} rooms available! Available double rooms: ${2}.Available maisonette rooms: 1."`
        }
    }
}

let hotel = new Hotel('HotUni', 1);
console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
