function trekkingMania(input) {
    let groupsNumber = Number(input[0]);
    let groupMembers = Number(input[1]);
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let sumPeople = 0;

    for (i = 1; i < input.length; i++) {
        let currentGroup = Number(input[i])
        sumPeople += currentGroup;
    }

    for (i = 1; i < input.length; i++) {
        let currentGroup = Number(input[i]);

        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup >= 6 && currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup >= 13 && currentGroup <= 25) {
            kilimanjaro += currentGroup;
        } else if (currentGroup >= 26 && currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }

    console.log(`${(musala / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / sumPeople * 100).toFixed(2)}%`);

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);