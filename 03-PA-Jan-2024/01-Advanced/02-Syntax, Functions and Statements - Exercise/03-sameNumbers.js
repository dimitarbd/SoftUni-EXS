function sameNumbers(num) {
    let isSame = true;
    let sum = 0;

    num.toString()
        .split('')
        .map((x, i, self) => {
            if (x !== self[0]) {
                isSame = false;
            }
            return sum +=Number(x);
        });
        console.log(isSame);
        console.log(sum);
}
sameNumbers(2222222);
console.log('=============');
sameNumbers(1234);