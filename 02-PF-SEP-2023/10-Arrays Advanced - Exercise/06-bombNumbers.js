function bombNumbers(arr, bomb) {
    let [bombNum, power] = bomb;
    let sum = 0;
    
    
    while (arr.includes(bombNum)) {
        let bombIndex = arr.indexOf(bombNum);
        arr.splice(Math.max(0, bombIndex - power), power * 2 + 1, 0);
    }

    for (let num of arr) {
        sum += num;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);