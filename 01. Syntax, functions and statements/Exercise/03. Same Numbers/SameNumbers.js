function solve(number) {
    let numberAsString = number.toString();
    let areNumbersTheSame = true;
    let sumNumbers = 0;

    for (i = 0; i < numberAsString.length - 1; i++) {
        let currentNum = numberAsString[i];
        let nextNum = numberAsString[i + 1];

        if (currentNum !== nextNum) {
            areNumbersTheSame = false;
        }
    }

    for (i = 0; i < numberAsString.length; i++) {
        let currentNum = Number(numberAsString[i]);
        sumNumbers += currentNum;
    }

    console.log(areNumbersTheSame);
    console.log(sumNumbers);
}

solve(2222222);
