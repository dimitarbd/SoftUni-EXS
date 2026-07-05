function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let volume = width * length * heigth;

    let index = 3;
    let command = input[index];
    let isValid = false;

    while (volume > 0) {
        
        if (command !== "Done") {
            let currentBoxes = Number(command);
            volume -= currentBoxes;
        } else if (command === "Done") {
            console.log(`${volume} Cubic meters left.`);
            isValid = true;
            break;
        }
        index++;
        command = input[index];
    }

    if (!isValid) {
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
    }

}
moving(["10",
"1",
"2",
"4",
"6",
"Done"]);