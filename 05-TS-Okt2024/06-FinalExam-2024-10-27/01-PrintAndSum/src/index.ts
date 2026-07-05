function printAndSum(start: number, end: number): void {
    let sum: number = 0;
    let numString: string = '';
    for (let i = start; i <= end; i++) {
        sum += i;
        numString += `${i} `;
    }
    console.log(numString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
console.log('--------------');
printAndSum(0, 26);
console.log('--------------');
printAndSum(50, 60);
console.log('--------------');

