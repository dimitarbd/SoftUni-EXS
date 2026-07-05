function solve(input) {
    let text = input.shift();

    while (input[0] != "Done") {
        let tokens = input.shift().split(' ');
        let action = tokens[0];

        switch (action) {
            case 'Change':
                let char = tokens[1];
                let replacement = tokens[2];
                let newTxt = text.split(char).join(replacement);
                text = newTxt;
                console.log(text);
                break;
            case 'Includes':
                let substr = tokens[1];
                if (text.includes(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'End':
                let substring = tokens[1];
                if (text.endsWith(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Uppercase':
                let txt = text.toUpperCase(text);
                text = txt;
                
                console.log(text);
                break;
            case 'FindIndex':
                let charIdx = tokens[1];

                console.log(text.indexOf(charIdx));
                break;
            case 'Cut':
                let startIdx = Number(tokens[1]);
                let count = Number(tokens[2]);

                let cutText = text.slice(startIdx, startIdx+count);
                text = cutText;
                
                console.log(text);
                break;
        }
    }
}
solve(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]);
console.log('=================');
solve(["*S0ftUni is the B3St Plac3**",

    "Change 2 o",

    "Includes best",

    "End is",

    "Uppercase",

    "FindIndex P",

    "Cut 3 7",

    "Done"]);