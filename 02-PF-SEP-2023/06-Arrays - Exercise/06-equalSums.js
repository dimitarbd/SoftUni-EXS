function equalSums(arr) {
    let result = 'no';

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let j = i + 1; j < arr.length; j++) {
            sumRight += arr[j];
        }
        for (let k = 0; k < i; k++) {
            sumLeft += arr[k];
        }
        if (sumLeft == sumRight) {
            result = i;
            break;
        }
    }
    console.log(result);

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
