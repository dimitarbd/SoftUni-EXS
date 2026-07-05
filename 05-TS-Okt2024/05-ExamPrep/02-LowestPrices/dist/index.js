const inputCollection = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];
const generateProductTownPriceMap = (input) => {
    const result = {};
    for (const line of input) {
        const [town, product, price] = line.split(' | ');
        const parsedPrice = Number(price);
        if (!result[product]) {
            result[product] = {};
        }
        if (!result[product][town]) {
            result[product][town] = parsedPrice;
        }
        else {
            if (result[product][town] > parsedPrice) {
                result[product][town] = parsedPrice;
            }
        }
    }
    return result;
};
const printResult = (result) => {
    const tuples = Object.entries(result);
    for (const [product, townPriceMap] of tuples) {
        const townPricesTuple = Object.entries(townPriceMap);
        const sorted = townPricesTuple.sort((a, b) => a[1] - b[1]);
        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
};
function solve(input) {
    const result = generateProductTownPriceMap(input);
    printResult(result);
}
solve(inputCollection);
