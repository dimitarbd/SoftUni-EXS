function areaOfFigures(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);

    if (figure === "square") {
        console.log((a * a).toFixed(3))
    } else if (figure === "rectangle") {
        console.log((a * b).toFixed(3))
    } else if (figure === "circle") {
        console.log((a * a * Math.PI).toFixed(3))
    } else {
        console.log(((a * b) / 2).toFixed(3))
    }

}

areaOfFigures(["circle",
"6"]);
