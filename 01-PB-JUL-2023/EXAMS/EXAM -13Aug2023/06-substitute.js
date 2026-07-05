function substitute(input) {
    let kStartNum = Number(input[0]);
    let kEndNum = 8;
    let lStartNum = 9;
    let lEndNum = Number(input[1]);

    let mStartNum = Number(input[2]);
    let mEndNum = 8;
    let nStartNum = 9;
    let nEndNum = Number(input[3]);

    let counter = 0;


    for (let k = kStartNum; k <= kEndNum; k++) {
        for (let l = lStartNum; l >= lEndNum; l--) {
            for (let m = mStartNum; m <= mEndNum; m++) {
                for (let n = nStartNum; n >= nEndNum; n--) {
                    
                    if (k % 2 == 0 && m % 2 == 0 && l % 2 !== 0 && n % 2 !== 0) {
                        if (k === m && l === n) {
                            console.log(`Cannot change the same player.`);
                        } else {
                            console.log(`${k}${l} - ${m}${n}`);
                        }
                        counter++;
                        }  
                    }
                    if (counter > 6) {
                        break;
                    }
                    
                    }
                }
            }
        }
    



substitute([6,
    7,
    5,
    6]);