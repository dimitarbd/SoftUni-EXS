function storage(arr) {
    let map = new Map();

    for (let item of arr) {
        let [product, quantity] = item.split(' ');
        quantity = Number(quantity);
        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currQuantity = map.get(product);
            let newDuantity = currQuantity += quantity;
            map.set(product, newDuantity);
        }
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
console.log('--------------');
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);