function vacationBooksList(input) {
    let numberPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = numberPages / pages;
    let hoursPerDay = totalTime / days;
    
    console.log(hoursPerDay);
}

vacationBooksList(["212 ", "20 ", "2 "]);