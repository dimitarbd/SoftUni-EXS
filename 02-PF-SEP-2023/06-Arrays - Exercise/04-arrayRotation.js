function arrayRotation(arr, n) {
    
    for (let i = 1; i <= n; i++){
        let arrN = [];
        for (let j = 1; j < arr.length; j++) {
            arrN.push(arr[j]);
        }

        arrN.push(arr[0]);
        arr = arrN;
    }
console.log(arr.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);