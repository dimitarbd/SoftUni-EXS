function firstLastKNumbers(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length - k, arr.length).join(' '));
}
firstLastKNumbers([2, 7, 8, 9]);
firstLastKNumbers([3, 6, 7, 8, 9]);