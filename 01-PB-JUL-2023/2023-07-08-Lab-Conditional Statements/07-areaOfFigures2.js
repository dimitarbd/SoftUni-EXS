function areaOfFigures(input) {
    let figure = input[0];
    let result = 0;
    
    if (figure === "square") {
        let a = Number(input[1]);
        result = a * a;   
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;    
    } else if (figure === "circle") {
        let r = Number(input[1]);
        result = Math.PI * Math.pow(r,2);    
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        result = (a * h) / 2;
    }

    console.log(result.toFixed(3));

}

areaOfFigures(["square", "5"]);
