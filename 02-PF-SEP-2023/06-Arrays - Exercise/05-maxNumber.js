function maxNumber(arr) {
    let arrNew = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] <= arr[j]) {
                break;
            }
            if (j == arr.length) {
                arrNew.push(arr[i]);
            }
        }
    }
    console.log(arrNew.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);