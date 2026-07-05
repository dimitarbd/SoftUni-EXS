function walking(input) {
    let targetSteps = 10000;
    let reached = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Going home") {

        let steps = Number(input[index]);
        reached += steps;

        if (reached >= targetSteps) {
            console.log(`Goal reached! Good job!`)
            console.log(`${reached - targetSteps} steps over the goal!`)
            break;
        }
        index++;
        command = input[index];

    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        reached += stepsToHome;
        if (reached >= targetSteps) {
            console.log(`Goal reached! Good job!`)
            console.log(`${reached - targetSteps} steps over the goal!`)

        } else {
            console.log(`${targetSteps - reached} more steps to reach goal.`)
        }
    }

}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"]);