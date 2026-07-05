function plantDiscovery(arr) {
    let n = arr.shift();
    n = Number(n);
    let plantList = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = arr.shift().split('<->');
        rarity = Number(rarity);
        let rating = 0;
        let counter = 0;

        plantList[plant] = { plant, rarity, rating, counter }

    }

    let commands = arr.shift();

    while (commands != "Exhibition") {
        commands = commands.split(': ');
        let command = commands.shift();
        let tokens = commands.shift().split(' - ');

        if (plantList.hasOwnProperty(tokens[0])) {
            switch (command) {
                case 'Rate':
                    let [plant, rating] = tokens;
                    rating = Number(rating);
                    plantList[plant].rating += rating;
                    plantList[plant].counter += 1;
                    break;
                case 'Update':
                    let [plantU, rarity] = tokens;
                    rarity = Number(rarity);
                    plantList[plantU].rarity = rarity;
                    break;
                case 'Reset':
                    let plantR = tokens.shift();
                    plantList[plantR].rating = 0;
                    plantList[plantR].counter = 0;
                    break;
            }
        } else {
            console.log('error');
        }
        commands = arr.shift();
    }

    let entries = Object.entries(plantList);

    console.log('Plants for the exhibition:');
    entries.forEach(([plant, stats]) => {
        let avgRating = Number(stats.rating) / Number(stats.counter) || 0;
        console.log(`- ${plant}; Rarity: ${stats.rarity}; Rating: ${avgRating.toFixed(2)}`)
    });

}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
console.log('=============================');
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);