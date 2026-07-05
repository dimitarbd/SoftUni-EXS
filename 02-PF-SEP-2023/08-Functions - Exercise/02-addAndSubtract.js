function addAndSubtract(a, b, c) {
    let sum = (a, b) => a + b;
    let substract = (b, c) => b - c;

    let result = sum(a, b);
    let result2 = substract(result, c);
    console.log(result2);
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
