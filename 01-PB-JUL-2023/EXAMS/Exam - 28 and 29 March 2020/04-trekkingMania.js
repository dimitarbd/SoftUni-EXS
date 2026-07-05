function trekkingMania(input) {
    let numberGroups = Number(input[0]);

    let musala = 0;
    let monblan =0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalClimbers = 0;

    for (let i = 1; i <= numberGroups; i++) {
        let command = Number(input[i])
        totalClimbers += command;
        if (command <= 5) {
            musala += command;
        } else if (command >= 6 && command <= 12) {
            monblan += command;
        } else if (command >= 13 && command <= 25) {
            kilimandjaro += command;
        } else if (command >= 26 && command <= 40) {
            k2 += command;
        } else if (command >= 41) {
            everest += command;
        }
    }

console.log(`${(musala/totalClimbers*100).toFixed(2)}%`);
console.log(`${(monblan/totalClimbers*100).toFixed(2)}%`);
console.log(`${(kilimandjaro/totalClimbers*100).toFixed(2)}%`);
console.log(`${(k2/totalClimbers*100).toFixed(2)}%`);
console.log(`${(everest/totalClimbers*100).toFixed(2)}%`);

}
trekkingMania([10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78]);