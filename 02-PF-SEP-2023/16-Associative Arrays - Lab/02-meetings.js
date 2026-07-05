function meetings(arr) {
    let meetingsApp = {};
    
    for (let item of arr) {
        let [day, name] = item.split(' ') ;
        if (meetingsApp.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetingsApp[day] = name;
        console.log(`Scheduled for ${day}`);
    }
Object.keys(meetingsApp).forEach(key => console.log(`${key} -> ${meetingsApp[key]}`));

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
// meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);