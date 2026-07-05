function solve(first, opertator, second) {
    let result = 0;
    // switch (opertator) {
    //     case '+':
    //         result = first + second;
    //         break;
    //     case '-':
    //         result = first - second;
    //         break;
    //     case '/':
    //         result = first / second;
    //         break;
    //     case '*':
    //         result = first * second;
    //         break;
    // }
    const CalculatorMap = {
        "+": first + second,
        "-": first - second,
        "/": first / second,
        "*": first * second,
    };
    result = CalculatorMap[opertator];
    return result.toFixed(2);
}
console.log(solve(5, "+", 10));
console.log('---------');
console.log(solve(25.5, "-", 22.5));
console.log('---------');
console.log(solve(9, "/", 2));
console.log('---------');
console.log(solve(5, "*", 7));
