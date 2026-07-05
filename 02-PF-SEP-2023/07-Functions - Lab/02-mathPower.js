function mathPower(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    console.log(result);
    //console.log(Math.pow(x, n));
}
mathPower(2,8);
mathPower(3,4);