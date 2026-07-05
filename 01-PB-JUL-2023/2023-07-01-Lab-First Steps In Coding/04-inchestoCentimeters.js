function inchestoCentimeters (input) {
    let a = 2.54;
    let inches = Number(input[0]);
    let centimeters = a * inches;
    console.log(centimeters);
}

inchestoCentimeters([5]);
