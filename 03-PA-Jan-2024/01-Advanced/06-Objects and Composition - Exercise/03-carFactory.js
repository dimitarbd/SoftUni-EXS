function carFactory(obj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let result = {
        model: obj.model,
        engine: null,
        carriage: null,
        wheels: null
    }


    if (obj.power <= 90) {
        result.engine = smallEngine;
    } else if (obj.power <= 120) {
        result.engine = normalEngine;
    } else {
        result.engine = monsterEngine;
    };

    let newColor = obj.color;

    let hatchback = { type: 'hatchback', color: newColor };
    let coupe = { type: 'coupe', color: newColor };


    if (obj.carriage == 'hatchback') {
        result.carriage = hatchback;
    } else {
        result.carriage = coupe;
    }

    let tyres = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;

    result.wheels = new Array(4).fill(tyres);

    return result;
}
console.table(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log('==================');
console.table(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));