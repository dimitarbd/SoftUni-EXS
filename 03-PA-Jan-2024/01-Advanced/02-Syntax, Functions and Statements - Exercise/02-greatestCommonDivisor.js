function greatestCommonDivisor(a, b) {
    let maxNum = Math.max(a, b);
    let greatestDivisor = 0;

    for (let i = 1; i <= maxNum; i++) {
        if(a % i == 0 && b % i == 0) {
            greatestDivisor = i;
        }
    }
    console.log(greatestDivisor);
}
greatestCommonDivisor(15, 5);
console.log('===============');
greatestCommonDivisor(2154, 458);