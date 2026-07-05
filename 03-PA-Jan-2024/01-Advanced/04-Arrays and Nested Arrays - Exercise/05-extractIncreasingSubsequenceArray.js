function extractIncreasingSubsequenceArray(arr) {
    let increasingArr = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let num of arr) {
        if (num >= biggestNum) {
            biggestNum = num;
            increasingArr.push(num);
        }
    }

    return increasingArr;
    
}
extractIncreasingSubsequenceArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
console.log('==============');
extractIncreasingSubsequenceArray([1,
    2,
    3,
    4]);
console.log('==================');
extractIncreasingSubsequenceArray([20,
    3,
    2,
    15,
    6,
    1]);