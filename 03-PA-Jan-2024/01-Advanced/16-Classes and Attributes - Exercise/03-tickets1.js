function ticketsStat(arr, sortCriteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = Number(price),
            this.status = status
        }
        static sort (arrNew, criteria) {
            return arrNew.sort ((a, b) => {
                return criteria == "price" ?
                a[criteria] - b[criteria] :
                a[criteria].localeCompare(b[criteria])})
        }
    }
    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        let myTicket = new Ticket (destination, price, status);
        result.push(myTicket);
    }
    
    return Ticket.sort(result, sortCriteria);

}

let res = ticketsStat(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')
console.log(res);