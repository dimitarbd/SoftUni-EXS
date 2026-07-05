function greatestCommonDivisor(a, b) {
    let variable = a % b;

    while (variable !==0) {
        a = b;
        b = variable;
        variable = a % b;
    }

    console.log(b);

}

greatestCommonDivisor(2154, 458);