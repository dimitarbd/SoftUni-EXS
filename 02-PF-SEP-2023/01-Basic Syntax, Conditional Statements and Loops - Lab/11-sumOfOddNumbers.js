function sumOfOddNumbers (n) {
    let sum = 0;
    let num = 1;
    for (let i = 1; i <= n; i++) {
        console.log(num);
        sum += num;
        num +=2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);