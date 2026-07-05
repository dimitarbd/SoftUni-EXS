function listOfProducts(arr) {
    let orderByName = arr.sort();
    for (let i = 1; i <= orderByName.length; i++) {
        console.log(`${i}.${orderByName[i-1]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);