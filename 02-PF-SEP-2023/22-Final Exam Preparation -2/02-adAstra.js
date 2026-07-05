function adAstra(arr) {
    let code = arr.shift();

    let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;

    let match = pattern.exec(code);

    let list = {};
    let totalCalories = 0;

    while (match) {
        let { name, date, cal } = match.groups;
        cal = Number(cal);
        totalCalories += cal;
        let product = { date, cal };

        list[name] = product;
        match = pattern.exec(code);
    }

let days = Math.floor(totalCalories / 2000);

console.log(`You have food to last you for: ${days} days!`);

for (let name in list) {
    let food = list[name];
    console.log(`Item: ${name}, Best before: ${food.date}, Nutrition: ${food.cal}`);
}

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log('================');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('================');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
