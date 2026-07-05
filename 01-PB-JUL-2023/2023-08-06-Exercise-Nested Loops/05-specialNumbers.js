function specialNumbers(input) {
    let n = Number(input[0]);
    let specialNumBuff = "";
    let buff = "";
    let isValid = false;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            specialNumBuff += i;
        }

    }

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = String(i);

        for (let j = 0; j < currentNumber.length; j++) {
            let currentNumBuff = String(specialNumBuff[j]);

            for (let k = 0; k < currentNumBuff.length; k++) {
                if (j !== currentNumBuff){
                    isValid = true;
                    break;
                }
                
            }
        }
        if (isValid) {
        buff += currentNumber + " "
        }
    }


    console.log(specialNumBuff)
}
specialNumbers(["16"]);