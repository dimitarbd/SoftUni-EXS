const matrix = [
    [5, -1, 3],
    [2, 7, 9],
    [3, 4, 6],
    [-5, 8, -4],
    [-2, 0, -3]     
];
console.log(matrix);

for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
    for (let colIndex = 0; colIndex < 3; colIndex++) {
        console.log(matrix[rowIndex][colIndex]);
    }
}