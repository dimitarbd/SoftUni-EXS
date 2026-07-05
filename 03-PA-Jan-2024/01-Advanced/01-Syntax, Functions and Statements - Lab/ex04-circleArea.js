function circleArea(input) {
    let typeOfArgument = typeof(input);

    if (typeOfArgument == 'number') {
        let r = Number(input);
        let circleArea = Math.PI*r**2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`);
    }
}
circleArea(5);
console.log('===========');
circleArea('name');