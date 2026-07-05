function squareOfStars(n) {
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            console.log("* ".repeat(n));
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log("* ".repeat(5));
        }
    }
}
squareOfStars(2);
console.log('=============');
squareOfStars(7);
console.log('=============');
squareOfStars();