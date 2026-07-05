function computerStore(arr) {
    let customer = arr.pop();
    arr = arr.map(Number);
    let priceNoTax = 0;

    for (let price of arr) {
        if (price < 0) {
            console.log('Invalid price!');
            continue;
        }
        
        priceNoTax += price;
    }
    if (priceNoTax == 0) {
        console.log('Invalid order!');
        return;
    }
    
    let tax = priceNoTax * 0.2;
    let totalPrice = tax + priceNoTax;

    if (customer == 'special') {
        totalPrice *= 0.9 
    }

    console.log('Congratulations you\'ve just bought a new computer!');
    console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);

}
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]);
// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ]);
computerStore(["regular"])
