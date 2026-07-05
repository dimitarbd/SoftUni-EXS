function changeBureau(input) {
    let bitcoin = Number(input[0]);
    let chineseJuan = Number(input[1]);
    let comпission = Number(input[2]);

    let bitcoinToLv = bitcoin * 1168;
    let juanToDollar = chineseJuan * 0.15;
    let dollarToLv = juanToDollar * 1.76;
    let euro = (bitcoinToLv + dollarToLv) / 1.95;
    let totalMoney = euro * (1 - (comпission/100));
    
    console.log(totalMoney.toFixed(2));

}
changeBureau([20,
    5678,
    2.4]);