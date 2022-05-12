function solve(array, n) {
    let newArray = [];

    for (i = 0; i < array.length; i += n) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2));


//Solution with filter() :
function solve(array, n) {
    array = array.filter((element, i) => i % 2 === 0);
    return array;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2));
