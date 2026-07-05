function activationKeys(arr) {
    let activKey = arr.shift();
    let command = arr.shift();

    while (command != 'Generate') {
        let tokens = command.split(">>>")

        switch (tokens[0]) {
            case 'Contains':
                let substr = tokens[1];

                if (activKey.includes(substr)) {
                    console.log(`${activKey} contains ${substr}`);
                } else {
                    console.log('Substring not found!');
                }

                break;
            case 'Flip':
                let upLow = tokens[1];
                let start = Number(tokens[2]);
                let end = Number(tokens[3]);

                let first = activKey.slice(0, start);
                let middle = activKey.slice(start, end);
                let last = activKey.slice(end);

                if (upLow == 'Upper') {
                    middle = middle.toUpperCase();
                } else {
                    middle = middle.toLowerCase();
                }

                activKey = first + middle + last;

                console.log(activKey);

                break;
            case 'Slice':
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);

                let fistHalf = activKey.slice(0, startIdx);
                let lastHalf = activKey.slice(endIdx);

                activKey = fistHalf + lastHalf;

                console.log(activKey);
                break;
        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${activKey}`);

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('=======================');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);