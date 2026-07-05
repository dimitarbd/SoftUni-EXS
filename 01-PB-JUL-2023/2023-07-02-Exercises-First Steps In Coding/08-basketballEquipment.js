function basketballEquipment(input) {
    let anualtax = Number(input[0]);

    let shoes = anualtax * 0.6;
    let clothes = shoes * 0.8;
    let ball = clothes / 4;
    let accessories = ball / 5;
    let totalPrice = anualtax + shoes + clothes + ball + accessories;
    
    console.log(totalPrice);
}

basketballEquipment(["365 "]);