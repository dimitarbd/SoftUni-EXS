var dayOfWeek;
(function (dayOfWeek) {
    dayOfWeek[dayOfWeek["Monday"] = 0] = "Monday";
    dayOfWeek[dayOfWeek["Tuesday"] = 1] = "Tuesday";
    dayOfWeek[dayOfWeek["Wednesday"] = 2] = "Wednesday";
    dayOfWeek[dayOfWeek["Thursday"] = 3] = "Thursday";
    dayOfWeek[dayOfWeek["Friday"] = 4] = "Friday";
    dayOfWeek[dayOfWeek["Saturday"] = 5] = "Saturday";
    dayOfWeek[dayOfWeek["Sunday"] = 6] = "Sunday";
})(dayOfWeek || (dayOfWeek = {}));
function isValid(day) {
    if (dayOfWeek[day] == undefined) {
        return console.log('error');
    }
    console.log(dayOfWeek[day]);
}
isValid('Monday');
isValid('Friday');
isValid('Invalid');
