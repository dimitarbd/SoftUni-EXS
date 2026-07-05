function calculator(num1, op, num2) {
    let sum = num1 + num2;
    let diff = num1 - num2;
    let division = num1 / num2;
    let multi = num1 * num2;

    if (op == '+') {
        console.log(sum.toFixed(2));
    } else if (op == '-'){
        console.log(diff.toFixed(2));
    } else if (op == '/'){
        console.log(division.toFixed(2));
    } else {
        console.log(multi.toFixed(2));
    }

}
calculator(5,
    '+',
    10);
    