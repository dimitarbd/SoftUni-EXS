function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint * 1.1) * 14.50;
    let thinnerPrice = thinner * 5;
    let bags = 0.4;
    let materialPrice = nylonPrice + paintPrice + thinnerPrice + bags;
    let people = (materialPrice * 0.3) * hours;
    let totalPrice = materialPrice + people;

    console.log(totalPrice);
}

repainting(["10 ", "11 ", "4 ", "8 "]);