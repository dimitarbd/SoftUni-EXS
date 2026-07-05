function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let piecesCake = length * width;

    let index = 2;
    let command = input[index];
    let isValid = false;

    while (piecesCake > 0) {


        if (command !== "STOP") {
            let currentPieces = Number(command);
            piecesCake -= currentPieces;

        } else {
            console.log(`${piecesCake} pieces are left.`)
            isValid = true;
            break;
        }
        index++;
        command = input[index];


    }

    if (!isValid) {
        console.log(`No more cake left! You need ${Math.abs(piecesCake)} pieces more.`);
    }

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);