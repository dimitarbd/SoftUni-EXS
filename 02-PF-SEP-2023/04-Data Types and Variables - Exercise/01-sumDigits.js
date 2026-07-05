function sumDigits(num) {
    let numDigits = String(num);
    let sum = 0;

    for (let i = 0; i < numDigits.length; i++) {
        sum += Number(numDigits[i]);
    }

    console.log(sum);
    
}
sumDigits(245678);