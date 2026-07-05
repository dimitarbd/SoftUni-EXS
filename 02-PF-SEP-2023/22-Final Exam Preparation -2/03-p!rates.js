function pirates(arr) {
    let pirates = {};

    while (arr[0] != "Sail") {
        let [city, people, gold] = arr.shift().split('||');
        people = Number(people);
        gold = Number(gold);

        if (city in pirates) {
            let town = pirates[city];
            town.people += people;
            town.gold += gold
        } else {
            let town = { people, gold };
            pirates[city] = town;
        }
    }
    arr.shift();
    let tokens = arr.shift().split('=>');

    while (tokens[0] != "End") {
        if (tokens[0] == 'Plunder') {
            let [command, town, people, gold] = tokens;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            let currTown = pirates[town];
            currTown.people -= people;
            currTown.gold -= gold;
            
            if (currTown.people <= 0 || currTown.gold <= 0) {
                delete pirates[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else {
            let [command, town, gold] = tokens;
            gold = Number(gold);
            
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                let prosperTown = pirates[town];
                prosperTown.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${prosperTown.gold} gold.`);
            }
        }
        tokens = arr.shift().split('=>');
    }

    let settlements = Object.entries(pirates);
    
    if(settlements.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${settlements.length} wealthy settlements to go to:`);
        for (let name in pirates) {
            let town = pirates[name];

            console.log(`${name} -> Population: ${town.people} citizens, Gold: ${town.gold} kg`);
        }
    }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
console.log('===============');
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);