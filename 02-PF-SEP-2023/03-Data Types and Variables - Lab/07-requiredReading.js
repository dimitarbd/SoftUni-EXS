function requiredReading(pages, pagesPerHour, days) {
    let totalTime = pages / pagesPerHour;
    let hours = totalTime / days;
    console.log(hours);
}
requiredReading(212,
    20 ,
    2 );