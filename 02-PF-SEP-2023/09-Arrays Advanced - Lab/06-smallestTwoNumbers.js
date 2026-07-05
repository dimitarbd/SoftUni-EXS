function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let smallestTwo = sorted.slice(0, 2)
    
    console.log(smallestTwo.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);