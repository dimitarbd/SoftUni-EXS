function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    console.log(arr.slice(mid));
}
biggerHalf([4, 7, 2, 5]);
console.log('==============');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
