function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isValid = false;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            let sum = a + b;
            counter++;
            if (sum === magicNumber) {
            console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
            isValid = true;
            break;
            }
        }
        if (isValid) {
            break;
        }
    }
    if (!isValid) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
    

}
sumOfTwoNumbers(["88",
"888",
"1000"]);