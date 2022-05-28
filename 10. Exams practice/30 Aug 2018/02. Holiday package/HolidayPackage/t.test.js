const { HolidayPackage } = require('./solution.js');
const { assert } = require('chai');

describe("HolidayPackageTest", function () {
    describe("Instantiation", function () {
        it("testCnstructor", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            assert.equal(vacation.season, 'Summer');
            assert.equal(vacation.destination, 'Paris');
            assert.equal(vacation.vacationers.length, 0);
            assert.equal(vacation.insuranceIncluded, false);
        });
    });
    describe("showVacationers", function () {
        it("withVacationeersTest", function () {
            let withVacationeers = new HolidayPackage('Paris', 'Summer');
            withVacationeers.addVacationer('John Atanasov');
            assert.equal(withVacationeers.showVacationers(), 'Vacationers:\n' + 'John Atanasov');
        })
        it("noVacatationeersTest", function () {
            let noVacationeers = new HolidayPackage('Paris', 'Summer');
            assert.equal(noVacationeers.showVacationers(), 'No vacationers are added yet');
        });
    });
    describe("addVacationeer", function () {
        it("addVacationeer", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            vacation.addVacationer('John Atanasov');
            assert.equal(vacation.vacationers.length, 1);
        })
        it("addVacationeerWithThreeNames", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            assert.throw(() => vacation.addVacationer('Ivan Ivanov Ivanov'), 'Name must consist of first name and last name');
        })
        it("addVacationeersThrowError", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            assert.throw(() => vacation.addVacationer(2), 'Vacationer name must be a non-empty string');
            assert.throw(() => vacation.addVacationer(" "), 'Vacationer name must be a non-empty string');
            assert.throw(() => vacation.addVacationer('Ivan'), 'Name must consist of first name and last name');
        })
    });
    describe("insuranceIncluded", function () {
        it("worksCorrect", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            vacation.insuranceIncluded = true;
            assert.equal(vacation._insuranceIncluded, true);
        })
        it("throwError", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            assert.throw(() => vacation.insuranceIncluded = 'String', 'Insurance status must be a boolean');
            assert.throw(() => vacation.insuranceIncluded = 2, 'Insurance status must be a boolean');
        })
    });
    describe("generateHolidayPackage", function () {
        it("throwErrorNoVacationeers", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            assert.throw(() => vacation.generateHolidayPackage(), 'There must be at least 1 vacationer added');
        });
        it("summerVacationNoInsurance", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            vacation.addVacationer('Peter Peterson');

            let string = "Holiday Package Generated\n" +
                "Destination: " + 'Paris' + "\n" +
                'Vacationers:\nPeter Peterson' + "\n" +
                "Price: " + '600';

            assert.equal(vacation.generateHolidayPackage(), string);
        });
        it("summerVacationWithInsurance", function () {
            let vacation = new HolidayPackage('Paris', 'Summer');
            vacation.addVacationer('Peter Peterson');
            vacation.insuranceIncluded = true;
            let withInsurance = "Holiday Package Generated\n" +
                "Destination: " + 'Paris' + "\n" +
                'Vacationers:\nPeter Peterson' + "\n" +
                "Price: " + '700';
            assert.equal(vacation.generateHolidayPackage(), withInsurance);
        });
        it("springVacationWithoutInsurance", function () {
            let springVacation = new HolidayPackage('Paris', 'Spring');
            springVacation.addVacationer('Peter Peterson');

            let springString = "Holiday Package Generated\n" +
                "Destination: " + 'Paris' + "\n" +
                'Vacationers:\nPeter Peterson' + "\n" +
                "Price: " + '400';
            assert.equal(springVacation.generateHolidayPackage(), springString);
        })
        it("springVacationWithInsurance", function () {
            let springVacation = new HolidayPackage('Paris', 'Spring');
            springVacation.addVacationer('Peter Peterson');
            springVacation.insuranceIncluded = true;
            let springString = "Holiday Package Generated\n" +
                "Destination: " + 'Paris' + "\n" +
                'Vacationers:\nPeter Peterson' + "\n" +
                "Price: " + '500';
            assert.equal(springVacation.generateHolidayPackage(), springString);
        })
    });
});