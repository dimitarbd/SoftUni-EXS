function theAngryCat(priceRating, entryPoint, type) {
    let left = priceRating.splice(0, entryPoint);
    let entryPrice = priceRating.shift() 
    let right = priceRating;

    let leftSum = left.reduce((sum, price) => {
        if (type == 'cheap') {
            sum += price < entryPrice ? price : 0;
        }
        if (type == 'expensive') {
            sum += price >= entryPrice ? price : 0;
        }
        return sum;
    }, 0);

    let rightSum = right.reduce((sum, price) => {
        if (type == 'cheap') {
            sum += price < entryPrice ? price : 0;
        }
        if (type == 'expensive') {
            sum += price >= entryPrice ? price : 0;
        }
        return sum;
    }, 0);

    if (leftSum >= rightSum ) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }

}
theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");