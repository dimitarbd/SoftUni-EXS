function circleArea(input) {
    let typeOfArgument = typeof (input);
    let result;
    if (typeOfArgument == 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`);
    }
}
circleArea(5);
console.log('===========');
circleArea('name');