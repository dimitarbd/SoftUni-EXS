function lunchBreak(input) {
    let nameSerial = input[0];
    let durationSerial = Number(input[1]);
    let durationBreak = Number(input[2]);

    let lunchBreak = durationBreak * 1 / 8;
    let recreation = durationBreak * 1 / 4;
    let restTime = durationBreak - lunchBreak - recreation;

    if (durationSerial <= restTime) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(restTime - durationSerial)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(durationSerial - restTime)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"]);