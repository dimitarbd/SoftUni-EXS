function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secPerMeter = Number(input[2]);

    let timeSwimming = distance * secPerMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = timeSwimming + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["10464",
"1500",
"20"]);