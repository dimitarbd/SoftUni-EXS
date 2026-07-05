// type MapType = Record<string, number>;
type MapType = { [key: string]: number };


function solve(first: number, opertator: string, second: number): string {

    let result: number = 0;

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

    const CalculatorMap: MapType = {
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


