function solve(matrix) {
    let rowSums = [];
    let colSums = [];

    for (row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        let sum = currentRow.reduce((result, currentValue) => (result + currentValue), 0);
        rowSums.push(sum);
    }

    for (col = 0; col < matrix.length; col++) {
        let element = 0;
        for (row = 0; row < matrix.length; row++) {
            element += matrix[row][col];
        }
        colSums.push(element);
    }
    return rowSums.concat(colSums).every((el, i, array) => el === array[0]);
}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));

console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]

));

console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));
