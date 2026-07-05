function solve(input) {
    let heroCollection = {};

    while (input[0] != 'End') {
        let tokens = input.shift().split(' ');
        let action = tokens[0];
        let name = tokens[1];

        switch (action) {
            case 'Enroll':
                let spellName = [];
                if (name in heroCollection) {
                    console.log(`${name} is already enrolled.`);
                } else {
                    heroCollection[name] = { name, spellName };
                }
                break;

            case 'Learn':
                let spell = tokens[2];
                
                if (name in heroCollection) {
                    let collection = heroCollection[name].spellName;
                    if (collection.includes(spell)) {
                        console.log(`${name} has already learnt ${spell}.`);
                    } else {
                        heroCollection[name].spellName.push(spell);
                    }
                } else {
                    console.log(`${name} doesn't exist.`);
                }
                break;

            case 'Unlearn':
                let spellUnlearn = tokens[2]
                if (name in heroCollection) {
                    let collection = heroCollection[name].spellName;
                    if (collection.includes(spellUnlearn)) {                  
                        heroCollection[name].spellName.splice(collection.indexOf(spellUnlearn), 1);
                    } else {
                        console.log(`${name} doesn't know ${spellUnlearn}.`);
                    }
                } else {
                    console.log(`${name} doesn't exist.`);
                }

                break;
        }
    }

    console.log('Heroes:');

    let entries = Object.keys(heroCollection);

    entries.forEach((key) => {
        const value = heroCollection[key];

        console.log(`== ${value.name}: ${value.spellName.join(', ')}`);

    });

}

solve(["Enroll Stefan",

    "Enroll Peter",

    "Enroll Stefan",

    "Learn Stefan ItShouldWork",

    "Learn Stefan ItShouldWork1",

    "Learn Stefan ItShouldWork2",

    "Learn John ItShouldNotWork",

    "Unlearn George Dispel",

    "Unlearn Stefan ItShouldWork",

    "End"]);
// console.log('=================');
// solve(["Enroll Stefan",

//     "Learn Stefan ItShouldWork",

//     "Learn Stefan ItShouldWork",

//     "Unlearn Stefan NotFound",

//     "End"]);
//     console.log('=================');
// solve(["Enroll Stefan",

// "Enroll Peter",

// "Enroll John",

// "Learn Stefan Spell",

// "Learn Peter Dispel",

// "End"]);