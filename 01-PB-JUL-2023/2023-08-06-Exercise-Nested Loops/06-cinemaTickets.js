function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTicket = 0;
    let standartTicket = 0;
    let kidTicket = 0;
    let totalTicket = 0;

    while (command !== "Finish") {
        let movieName = command;
        
        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let countSellTicket = 0;


        while (ticketType !== "End") {
            countSellTicket++;

            switch (ticketType) {
                case "student": studentTicket++; break;
                case "standard": standartTicket++; break;
                case "kid": kidTicket++; break;
            }

            if(countSellTicket === freeSpace) {
                break;
            }

        
            ticketType = input[index];
            index++;
        }
        totalTicket += countSellTicket;
        let percentFull = countSellTicket / freeSpace* 100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`)

        command = input[index];
        index++;
    }
    

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(studentTicket / totalTicket * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTicket / totalTicket * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / totalTicket * 100).toFixed(2)}% kids tickets.`)

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);