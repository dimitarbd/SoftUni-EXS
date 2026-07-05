function addAndSubtract(arr) {
    let arrSum = 0;
    let arrMSum = 0;
    let arrModify = [];

    for (let i=0; i <arr.length; i++) {
        arrSum += arr[i];
    };

    for (let i=0; i <arr.length; i++) {
        if (arr[i] % 2 ==0) {
            let current = Number(arr[i] + i);
            arrModify.push(current);
            arrMSum += current;
        } else {
            let current = Number(arr[i] - i);
            arrModify.push(current);
            arrMSum += current;
        }
    };

    console.log(arrModify);
    console.log(arrSum);
    console.log(arrMSum);

}
addAndSubtract([5, 15, 23, 56, 35]);