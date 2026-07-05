function minNumber(input) {
    let index = 0;
    let num = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (num !== "Stop") {

        let currentNumber = Number(num);

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        num = input[index];
        index++;
    }
    console.log(minNumber)
}
minNumber(["999",
"Stop"]);