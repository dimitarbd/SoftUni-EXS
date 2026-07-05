function sequence(input) {
    let n = Number(input[0]);
    let currentNum = 1;

    while(currentNum <= n) {
        console.log(currentNum);
        currentNum = 2 * currentNum + 1; 
    }

}
sequence(["31"]);