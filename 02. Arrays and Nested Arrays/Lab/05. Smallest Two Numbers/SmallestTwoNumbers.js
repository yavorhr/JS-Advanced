function solve(matrix) {
    matrix.sort((a, b) => a - b);
    matrix = matrix.slice(0, 2);
    console.log(matrix[0], matrix[1]);
}

solve([30, 15, 50, 5]);
