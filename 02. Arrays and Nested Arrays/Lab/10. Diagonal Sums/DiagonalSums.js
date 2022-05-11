function diagonalSum(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (row = 0; row < matrix.length; row++) {
        firstDiagonal += matrix[row][row];
        secondDiagonal += matrix[row][matrix.length - 1 - row];
    }
    console.log(firstDiagonal, secondDiagonal);

}

diagonalSum([[20, 40],
[10, 60]]

);
