function solve(input) {
    let myArr = input;
    let printArr = [];

    for (i = 0; i < myArr.length; i += 2) {
        printArr.push(myArr[i]);
    }
    console.log(printArr.join(' '));
}

solve(['20', '30', '40', '50', '60']);

