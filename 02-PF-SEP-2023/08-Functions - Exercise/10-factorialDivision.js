function factorialDivision(a, b) {
    let factorial1 = calcFactorial(a);
    let factorial2 = calcFactorial(b);
    let result = factorial1 / factorial2;

    function calcFactorial(num) {
        let factorial = 1;

        while (num > 1) {
            factorial *= num;
            num--;
        }
        return factorial;
    }
    console.log(result.toFixed(2));
}


factorialDivision(5, 2);
factorialDivision(6, 2);