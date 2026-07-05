function lastKNumbersSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let prevK;
        if (i - k < 0) {
            prevK = 0;
        } else {
            prevK = i - k;
        }

        let current = result.slice(prevK, i);
        let sum = 0;

        for (let j = 0; j < current.length; j++) {
            sum += current[j];
        }

        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);