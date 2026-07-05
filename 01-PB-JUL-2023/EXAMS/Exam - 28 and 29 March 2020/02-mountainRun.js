function mountainRun(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let timeForDistance = distance * secondsPerMeter;
    let delay = Math.floor(distance / 50) * 30;
    let totalTime = timeForDistance + delay;

    if (record > totalTime) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }
debugger
}
mountainRun([5554.36,
    1340,
    3.23]);
