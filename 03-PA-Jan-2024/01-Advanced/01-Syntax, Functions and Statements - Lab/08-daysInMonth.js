function daysInMonth(month, year) {
    let myDate = new Date(year, month, 1);
    myDate.setDate(myDate.getDate() - 1)
    
    console.log(`${myDate.getDate()}`);
}
daysInMonth(1, 2012);
console.log('============');
daysInMonth(2, 2021);