function agencyProfit(input) {
    let name = input[0];
    let numberTickets = Number(input[1]);
    let numberKidTickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let serviceTip = Number(input[4]);

    let priceKidTicket = priceTicket * 0.3;

    let totalPrice = numberTickets * (priceTicket + serviceTip) + numberKidTickets*(priceKidTicket + serviceTip);
    let profit = totalPrice * 0.2;
    
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)
}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"]);