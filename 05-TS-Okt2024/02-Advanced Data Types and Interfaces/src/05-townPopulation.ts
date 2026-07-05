function townPopulation(arr: Array<any>) {
    const town = {};

    for (let city of arr) {
        let [name, population] = city.split(' <-> ');
        population = Number(population);
        if(town[name] !== undefined) {
            population += town[name];
        }
        town[name] = population;
    } 

    for (let city in town) {
        console.log((`${city} : ${town[city]}`));
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
console.log('============');
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);