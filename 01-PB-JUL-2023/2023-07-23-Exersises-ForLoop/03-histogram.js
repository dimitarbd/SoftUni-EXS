function histogram(input) {
    let num = Number(input[0]);
    let np1 = 0;
    let np2 = 0;
    let np3 = 0
    let np4 = 0;
    let np5 = 0;

    for (let i = 1; i <= num; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            np1++
        } else if (currentNumber <= 399) {
            np2++
        } else if (currentNumber <= 599) {
            np3++
        } else if (currentNumber <= 799) {
            np4++
        } else {
            np5++
        }
    }
    

    console.log(`${(np1 / num * 100).toFixed(2)}%`)
    console.log(`${(np2 / num * 100).toFixed(2)}%`)
    console.log(`${(np3 / num * 100).toFixed(2)}%`)
    console.log(`${(np4 / num * 100).toFixed(2)}%`)
    console.log(`${(np5 / num * 100).toFixed(2)}%`)

}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]);