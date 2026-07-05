function thePyramidOfKingDjoser(base, height) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let pyramidHeight = 0;
    let counter = 0;

    for (let i = base; i > 0; i -= 2) {
        counter++;
        pyramidHeight += height;
        if (i <= 2) {
            gold += (i ** 2) * height;
        } else if 
            (counter % 5 == 0) {
                stone += ((i - 2) ** 2) * height;
                lapisLazuli += (i * 4 - 4) * height;
        } else {
            stone += ((i - 2) ** 2) * height;
            marble += (i * 4 - 4) * height;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);

}
thePyramidOfKingDjoser(14, 1)