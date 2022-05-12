function solve(array, delimeter) {
    console.log(array.join(delimeter));

}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);

// Second solution :
function solve(array, delimeter) {
    let result = "";

    for (i = 0; i < array.length; i++) {
        result += i == array.length - 1 ? array[i] : (array[i] + delimeter);
    }
    console.log(result);
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
