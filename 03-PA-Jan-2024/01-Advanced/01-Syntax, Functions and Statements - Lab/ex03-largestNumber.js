function largestNumber(...num) {
    
    let maxNum = Math.max(...num);
    console.log(`The largest number is ${maxNum}.`);

}
largestNumber(5, -3, 16);
console.log('============');
largestNumber(-3, -5, -22.5);

