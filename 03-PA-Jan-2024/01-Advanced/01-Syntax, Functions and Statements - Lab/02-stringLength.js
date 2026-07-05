function stringLength(a, b, c) {
    let sum = a.length + b.length + c.length;
    let average = sum / 3;

    console.log(sum);
    console.log(average.toFixed());
}
stringLength('chocolate', 'ice cream', 'cake');
console.log('==================');
stringLength('pasta', '5', '22.3');