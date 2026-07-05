function sumOfNumbers(input) {
    let numSum = input[0];
    let sum = 0;

    for (let i = 0; i < numSum.length; i++) {
        let ch = Number(numSum[i]);
        sum += ch;
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"]); 