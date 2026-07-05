function oddAndEvenSum(arr) {
    let oddSum = 0;
    let evenSum = 0;

    let arrAsString = String(arr);

    for (let i = 0; i < arrAsString.length; i++) {
        let curNum = Number(arrAsString[i])
        if (curNum % 2 == 0) {
            evenSum += curNum;
        } else {
            oddSum += curNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);