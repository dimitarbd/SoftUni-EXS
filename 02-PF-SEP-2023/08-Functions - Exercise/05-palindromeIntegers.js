function palindromeIntegers(arr) {
    for(let num of arr) {
        let reversedNumStr = num.toString().split('').reverse().join('');
        console.log((num == reversedNumStr));
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);