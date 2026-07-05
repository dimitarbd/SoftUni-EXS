function aggregateElements(arr) {
    let sum = arr.reduce((acc, el) => acc + el);
    console.log(sum);
    let sumInverse = arr.reduce((acc, val) => acc + 1 / val, 0);
    console.log(sumInverse);
    console.log(arr.join(''));
}
aggregateElements([1, 2, 3]);
console.log('==========');
aggregateElements([2, 4, 8, 16]);
