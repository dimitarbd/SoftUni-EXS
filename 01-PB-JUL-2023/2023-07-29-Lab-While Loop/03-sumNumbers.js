function sumNumbers(input) {  
    let index = 0;
    let numStart = Number(input[index]);
    index++;

    let sum = 0;
    

    while(sum < numStart) {
       
        let command = Number(input[index]);
        index++;
        
        sum += command;
    }

    console.log(sum);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"]);