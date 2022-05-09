function solve(num1, num2) {
    let numberOne = Number(num1);
    let numberTwo = Number(num2);

    let minNumber = Math.min(numberOne, numberTwo);
    let greatCommonDivisior = 0;

    for (i = 1; i <= minNumber; i++) {
        if (numberOne % i == 0 && numberTwo % i == 0) {
            greatCommonDivisior = i;
        }
    }
    console.log(greatCommonDivisior);
}

solve(15, 5);
