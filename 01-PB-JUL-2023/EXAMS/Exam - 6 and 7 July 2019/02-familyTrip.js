function familyTrip(input) {
    let budjet = Number(input[0]);
    let nigths = Number(input[1]);
    let pricePerNigths = Number(input[2]);
    let percent = Number(input[3]);

    if (nigths > 7) {
        pricePerNigths *= 0.95;
    }

    let sum = nigths * pricePerNigths + (budjet * percent / 100);
    let diff = Math.abs(budjet - sum);

    if (budjet >= sum) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`)
    }
}
familyTrip([800.50,
    8,
    100,
    2]);