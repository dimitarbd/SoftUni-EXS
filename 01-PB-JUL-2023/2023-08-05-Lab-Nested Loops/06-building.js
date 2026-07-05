function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let a = floors; a > 0; a--) {
        let buff = "";
        for (let b = 0; b < rooms; b++) {

            if (a === floors) {
                buff += `L${a}${b} `;
            } else if (a % 2 !== 0) {
                buff += `A${a}${b} `;
            } else {
                buff += `O${a}${b} `;
            }

        }
        console.log(buff);
    }  

}
building(["9", "5"]);