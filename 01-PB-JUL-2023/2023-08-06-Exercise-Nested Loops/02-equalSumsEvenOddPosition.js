function equalSumsEvenOddPosition(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let buff = "";

for (let i = startNumber; i <= endNumber; i++) {
    let currentNumber = String(i);
    let sumEven = 0;
    let sumOdd = 0;
    for (let j = 0; j < currentNumber.length; j++) {
        if (j % 2 ===0) {
            sumEven += Number(currentNumber[j]);
        } else {
            sumOdd += Number(currentNumber[j]);
        }
    }
    if (sumEven === sumOdd) {
        buff += currentNumber + " "
    }
}
console.log(buff)
}
equalSumsEvenOddPosition(["100000",
"100050"]);
