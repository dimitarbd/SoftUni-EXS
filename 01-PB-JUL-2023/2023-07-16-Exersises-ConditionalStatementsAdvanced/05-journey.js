function journey (input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let price = 0;
    let place = "";
    let destination = "";

    if (budjet <= 100) {
        if (season == "summer") {
            price = budjet * 0.3;
            destination = "Camp";
            place = "Bulgaria";
        } else if (season == "winter") {
            price = budjet * 0.7;
            destination = "Hotel";
            place = "Bulgaria";
        }
    } else if (budjet > 100 && budjet <= 1000) {
        if (season == "summer") {
            price = budjet * 0.4;
            destination = "Camp";
            place = "Balkans";
        } else if (season == "winter") {
            price = budjet * 0.8;
            destination = "Hotel";
            place = "Balkans";
        }
    } else if (budjet > 1000) {
        price = budjet * 0.9;
        destination = "Hotel";
        place = "Europe";
    }

   
    
    console.log(`Somewhere in ${place}`);
    console.log(`${destination} - ${price.toFixed(2)}`);

}
journey(["1500", "summer"]);