function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let persent = Number(input[3]);

    let volume = lenght * hight * width;
    let liter = volume * 0.001;
    let literWater = liter * (1 - 0.17);

    console.log(literWater);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);