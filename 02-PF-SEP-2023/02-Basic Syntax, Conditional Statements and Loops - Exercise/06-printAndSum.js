function printAndSum(start, end) {
    let sum = 0;
    let numString = '';
    for (let i = start; i <= end; i++) {
        sum += i;
        numString += `${i} `;
    }
    console.log(numString);
    console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);