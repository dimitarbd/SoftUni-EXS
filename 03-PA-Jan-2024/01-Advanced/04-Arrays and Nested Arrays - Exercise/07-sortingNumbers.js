function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let sortedArr = [];
    let i = 0;

    while (arr.length > 0) {
        if (i % 2 == 0) {
            sortedArr.push(arr.shift());
        } else {
            sortedArr.push(arr.pop());
        }
        i++;
    }

    return sortedArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log('=================');
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);