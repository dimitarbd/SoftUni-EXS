function calorieObject(arr: string[]) {
    let calorieObj = {};

    for (let i=0; i<arr.length; i+=2) {
        let name = arr[i];
        let calorie = Number(arr[i+1]);
        calorieObj[name] = calorie;
    }
console.log(calorieObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('=============');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);