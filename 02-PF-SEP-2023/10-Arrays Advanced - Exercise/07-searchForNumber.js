function searchForNumber(arr, arr2) {
    let [first, second, third] = arr2;
    let takeElements = arr.splice(0, first);
    takeElements.splice(0, second);
    let counter = 0;

    while (takeElements.includes(third)) {
        let bomb = takeElements.indexOf(third);
        takeElements.splice(bomb, 1);
        counter++;
    }

    console.log(`Number ${third} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);