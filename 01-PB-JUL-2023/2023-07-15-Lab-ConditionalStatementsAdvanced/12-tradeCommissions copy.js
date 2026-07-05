function tradeCommissions(input) {

    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    let discount500 = 0;
    let discount1000 = 0;
    let discount10000 = 0;
    let discountMax = 0;
    let isValid = false;


    if (sales >= 0) {
        switch (town) {
            case "Sofia":
                discount500 = 0.05;
                discount1000 = 0.07;
                discount10000 = 0.08;
                discountMax = 0.12;
                isValid = true;
                break;
            case "Varna":
                discount500 = 0.045;
                discount1000 = 0.075;
                discount10000 = 0.10;
                discountMax = 0.13;
                isValid = true;
                break;
            case "Plovdiv":
                discount500 = 0.055;
                discount1000 = 0.08;
                discount10000 = 0.12;
                discountMax = 0.145;
                isValid = true;
                break;
            default:
                console.log("error");
                break;
        }
        if (isValid === true) {
            if (sales >= 0 && sales <= 500) {
                commission = sales * discount500;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * discount1000;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * discount10000;
            } else if (sales > 10000) {
                commission = sales * discountMax;
            }

            console.log(commission.toFixed(2));
        }

    } else {
        console.log("error");
    }
}

tradeCommissions(["Kaspichan",
    "50"]);