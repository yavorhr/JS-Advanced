function sumOfNumbers(num1, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    let sum = 0;
    for (let index = firstNumber; index <= secondNumber; index++) {
        sum += index;

    }
    console.log(sum);
}

sumOfNumbers('-8', '20'); 
