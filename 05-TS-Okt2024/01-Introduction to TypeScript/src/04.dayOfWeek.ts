enum dayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isValid(day: string) {
    if (dayOfWeek[day] == undefined) {
        return console.log('error');
    } 
        console.log(dayOfWeek[day]);        
    
}

isValid('Monday');
isValid('Friday');
isValid('Invalid');