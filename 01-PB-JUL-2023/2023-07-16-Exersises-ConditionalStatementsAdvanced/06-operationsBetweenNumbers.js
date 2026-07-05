function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let op = input[2];
    let result = 0;

    if (op == "+" || op == "-" || op == "*") {
        if (op =="+") {
            result = N1 + N2;
        } else if (op == "-") {
            result = N1 - N2;
        } else if (op == "*") {
            result = N1 * N2;
        }

        if (result % 2 == 0) {
            console.log(`${N1} ${op} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${op} ${N2} = ${result} - odd`);
        }
    } else if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`)
    } else if (op == "/") {
        result = N1 / N2;
        console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    } else if (op == "%") {
        result = N1 % N2;
        console.log(`${N1} % ${N2} = ${result}`);
    }

}
operationsBetweenNumbers(["7",
"3",
"*"]);