function suitcasesLoad(input) {
    let trunkVolume = Number(input[0]);
    let luggageVolume = 0; 
    let counter = 0;

    let index = 1;
    let command = input[index];
    index++;
    let isTrue = false;

    while (command !== "End") {
        let currentLuggageVolume = Number(command);
        counter++;
        if (counter % 3 == 0) {
            currentLuggageVolume *= 1.1;
        }
        luggageVolume += currentLuggageVolume; 
        if (luggageVolume > trunkVolume) {
            console.log("No more space!");
            counter--;
            break;
        }
        command = input[index];
        index++;
        if (command == "End") {
            isTrue = true;
        }
    }
    if (isTrue) {
        console.log("Congratulations! All suitcases are loaded!")
    }
    console.log(`Statistic: ${counter} suitcases loaded.`)
}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"]);