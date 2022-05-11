function biggestElement(matrix) {
    let biggestElement = matrix[0][0];

    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestElement) {
                biggestElement = matrix[row][col];
            }
        }
    }
    console.log(biggestElement);
}

biggestElement([[20, 50, 10],
[8, 33, 145]]
);
