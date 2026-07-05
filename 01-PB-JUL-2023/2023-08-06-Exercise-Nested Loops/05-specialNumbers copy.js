function specialNumbers(input) {
    let n = Number(input[0]);
    let specialNumBuff = "";
    let buff = "";

    for (let i = 1; i < 9; i++) {
        if (n % i === 0) {
            specialNumBuff += i;
        }
    }

    for (let n1 = 0; n1 < specialNumBuff.length; n1++) {
        let Buff1 = String(specialNumBuff[n1]);
        for (let n2 = 0; n2 < specialNumBuff.length; n2++) {
            let Buff2 = String(specialNumBuff[n2]);
            for (let n3 = 0; n3 < specialNumBuff.length; n3++) {
                let Buff3 = String(specialNumBuff[n3]); 
                for (let n4 = 0; n4 < specialNumBuff.length; n4++) {
                    let Buff4 = String(specialNumBuff[n4]);
                    buff += `${Buff1}${Buff2}${Buff3}${Buff4} `;
                }
            }
        }
    }

    console.log(buff)
}
specialNumbers(["16"]);