function sumFirstAndLast(arr) {
    let arrNum = arr.map(Number);
    let first = arrNum[0];
    let last = arrNum.pop();
    console.log(first + last);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);