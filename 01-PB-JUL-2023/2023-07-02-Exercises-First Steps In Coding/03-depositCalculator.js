function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let anualAPR = Number(input[2]);

    let divident = depositSum * (anualAPR / 100);
    let monthDivident = divident / 12;
    let totalSum = depositSum + depositTime * monthDivident;

    console.log(totalSum);
}

depositCalculator(["200 ", "3 ", "5.7 "]);