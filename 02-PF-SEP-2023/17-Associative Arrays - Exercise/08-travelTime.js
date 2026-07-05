function travelTime(arr) {
    let travels = {};

    for (let command of arr) {
        let [country, town, cost] = command.split(' > ');
        cost = Number(cost);

        // console.log(country, town, cost);
        if (country in travels) {
            if (town in travels[country]) {
                if (cost < travels[country][town]) {
                    travels[country][town] = cost;
                }
            } else {
                travels[country][town] = cost;
            }
        } else {
            travels[country] = { [town]: cost };
        }
    };
    let entries = Object.entries(travels)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, town] of entries) {
        let townEntries = Object.entries(town).sort((a, b) => a[1] - b[1]);
        let result = `${country} ->`

        for (let [town, cost] of townEntries) {
            result += ` ${town} -> ${cost}`
        }
console.log(result);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('==============');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);