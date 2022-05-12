function solve(array, n) {

    for (i = 0; i < n; i++) {
        const element = array.pop();
        array.unshift(element);
    }
    console.log(array.join(" "));
}

solve(['1',
    '2',
    '3',
    '4'],
    2);
