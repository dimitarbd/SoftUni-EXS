function experienceGaining(arr) {
    let neededExperience = Number(arr.shift());
    let battles = Number(arr.shift());
    let battleCount = 0;
    let expierence = 0;

    for (let i = 1; i <= battles; i++) {
        let battle = Number(arr[i-1]);

        if (i % 3 == 0) {
            battle *= 1.15;
        }
        if (i % 5 == 0) {
            battle *= 0.9;
        }
        if (i % 15 == 0) {
            battle *= 1.05;
        }
        expierence += battle;
        battleCount++;
        if (expierence >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
            return;
        }
    }

    let moreNeededExperience = neededExperience - expierence;

    console.log(`Player was not able to collect the needed experience, ${moreNeededExperience.toFixed(2)} more needed.`);
}
// experienceGaining([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30]);
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20]);
// experienceGaining([400,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20]);