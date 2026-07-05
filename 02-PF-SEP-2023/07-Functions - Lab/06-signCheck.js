function signCheck(a, b, c) {
    let negative = 0;
    if (a < 0) {
        negative++;
    }
    if (b < 0) {
        negative++;
    }
    if (c < 0) {
        negative++;
    }
    
    if (negative % 2 != 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);