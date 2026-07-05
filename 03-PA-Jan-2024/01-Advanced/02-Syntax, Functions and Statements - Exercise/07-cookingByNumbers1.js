function cookingByNumbers(numAsString, ...op) {
    let num = Number(numAsString);

    let operationEnum = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num +1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.80
    }

    op.forEach(el => {
        num = operationEnum[el](num);
        console.log(num);
    })
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('=================');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');