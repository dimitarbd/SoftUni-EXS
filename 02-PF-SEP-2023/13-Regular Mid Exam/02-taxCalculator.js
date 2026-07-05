function taxCalculator(arr) {
    let currentTax = 0;
    let totalTax = 0;
    let vehicles = arr.shift().split('>>');

    for (let current of vehicles) {
        let [vehicle, years, kilo] = current.split(' ');
        if (vehicle == 'family') {
            let traveled = Math.floor(kilo / 3000);
            currentTax = 50 - 5 * years + 12 * traveled;
            console.log(`A ${vehicle} car will pay ${currentTax.toFixed(2)} euros in taxes.`);

        } else if (vehicle == 'heavyDuty') {
            let traveled = Math.floor(kilo / 9000);
            currentTax = 80 - 8 * years + 14 * traveled;
            console.log(`A ${vehicle} car will pay ${currentTax.toFixed(2)} euros in taxes.`);

        } else if (vehicle == 'sports') {
            let traveled = Math.floor(kilo / 2000);
            currentTax = 100 - 9 * years + 18 * traveled;
            console.log(`A ${vehicle} car will pay ${currentTax.toFixed(2)} euros in taxes.`);

        } else {
            console.log('Invalid car type.');
            continue;
        }
        totalTax += currentTax;
    }

console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);

}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
// taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);


