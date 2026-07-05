function orders(name, n) {
    let result = 0;
    switch (name) {
        case 'coffee': result = n * 1.5; break;
        case 'water': result = n * 1; break;
        case 'coke': result = n * 1.4; break;
        case 'snacks': result = n * 2; break;
    }
    return result.toFixed(2);
}
orders("water", 5);
orders("coffee", 2);