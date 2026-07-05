function processOddNumbers(arr) {
    let result = arr.map(x => x * 2);
    let final = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            final.unshift(result[i]);
        }
    }
    console.log(final.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);


