function magicMatrices(arr) {
    let rowOne = 0;
    let rowTwo = 0;
    let colOne = 0;
    let colTwo = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            rowOne += arr[i][j];
            rowTwo += arr[i + 1][j];
        }
        for (let k = 0; k < arr.length; k++) {
            colOne += arr[k][i];
            colTwo += arr[k][i + 1];
        }
        if (rowOne !== rowTwo || colOne !== colTwo) {
            return false;
        }
        rowOne = 0;
        rowTwo = 0;
        colOne = 0;
        colTwo = 0;
    }
    return true
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
console.log('==============');
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
console.log('==============');
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));

