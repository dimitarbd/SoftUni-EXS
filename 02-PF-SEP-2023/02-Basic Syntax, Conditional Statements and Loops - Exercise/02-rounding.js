function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let outputNum = num.toFixed(precision);

    console.log(parseFloat(outputNum));
}
rounding(10.5,3);