function oldBooks(input) {
    let index = 0;
    let searchBook = input[index];
    index++;

    let bookCounter = -1;

    while (index !== searchBook) {
        let currentBook = input[index];
        bookCounter++;
        if (currentBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCounter} books.`);
            break;
        } else if (currentBook === searchBook) {
            console.log(`You checked ${bookCounter} books and found it.`)
            break;
        }
        currentBook = input[index];
        index++;
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);