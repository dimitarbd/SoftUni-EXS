function catalogue(arr) {
    let catalogue = {};
    let products = arr.sort((a, b) => a.localeCompare(b));
    
    for (let el of products) {
        let [name, price] = el.split(' : ');
        let letter = name[0];
        if (catalogue.hasOwnProperty(letter)) {
            catalogue[letter].push(`${name}: ${Number(price)}`);
        } else {
            catalogue[letter] = [];
            catalogue[letter].push(`${name}: ${Number(price)}`);
        }
    }
    
    Object.entries(catalogue).forEach((key) => { 
        console.log(`${key[0]}`);
        key[1].forEach(price => console.log(`  ${price}`));
    });
}
// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
//     ]);
// console.log('---------------');
// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]);
console.log('--------------');
catalogue(["Az : 2", "Aa : 1", "AV : 9"]);