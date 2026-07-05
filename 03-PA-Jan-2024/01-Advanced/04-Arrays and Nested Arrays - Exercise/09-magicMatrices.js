function magicMatrices(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let colOne = arr.reduce((acc, val, index) => {
            acc += val[i];
            return acc;
        }, 0);
        let colTwo = arr.reduce((acc, val, index) => {
            acc += val[i + 1];
            return acc;
        }, 0)
        let rowOne = arr[i].reduce((acc, val) => acc + val);
        let rowTwo = arr[i + 1].reduce((acc, val) => acc + val);

        if (rowOne !== rowTwo || colOne !== colTwo) {
            return false;
        }
    }
    return true;
}
// console.log(magicMatrices([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]));
// console.log('==============');
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
console.log('==============');
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));

