function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];

    while (sortedArr.length > 0) {
        result.push(sortedArr.pop());
        result.push(sortedArr.shift());
    };
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);