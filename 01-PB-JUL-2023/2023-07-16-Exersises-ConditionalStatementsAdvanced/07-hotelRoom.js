function hotelRoom(input) {
    let month = input[0];
    let days = Number(input[1]);
    let studioPrice = 0;
    let apartPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = days * 50;
            apartPrice = days * 65; break;
        case "June":
        case "September":
            studioPrice = days * 75.20;
            apartPrice = days * 68.70; break;
        case "July":
        case "August":
            studioPrice = days * 76;
            apartPrice = days * 77; break;
    }
if (days > 7 && days <=14 && (month == "May" || month == "October")) {
    studioPrice *= 0.95;
} else if (days > 14 && (month == "May" || month == "October")) {
    studioPrice *= 0.7;
} else if (days > 14 && (month == "June" || month == "September")) {
    studioPrice *= 0.8;
}

if (days > 14) {
    apartPrice *= 0.9;
}

console.log(`Apartment: ${apartPrice.toFixed(2)} lv.`);
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)

}
hotelRoom(["June",
"14"]);