function maxNumber(input) {
    let index = 0;
    let num = input[index];
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (num !== "Stop") {
        let command = Number(num);

        if (maxNumber < command) {
            maxNumber = command;
        }
        num = input[index];
        index++;
    }
    console.log(maxNumber)
}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);