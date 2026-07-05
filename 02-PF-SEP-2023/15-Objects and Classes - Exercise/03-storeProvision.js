function storeProvision(arr, arr2) {
    let products = {};

    for (let i = 0; i < arr.length; i += 2) {
        let productName = arr[i];
        let qty = Number(arr[i + 1]);

        products[productName] = qty;
    }


    for (let i = 0; i < arr2.length; i += 2) {
        let productName = arr2[i];
        let qty = Number(arr2[i + 1]);

        if (productName in products) {
            products[productName] += qty;
        } else {
            products[productName] = qty;
        }

    }

    let keys = Object.keys(products);

    for (let key of keys) {
        console.log(`${key} -> ${products[key]}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);