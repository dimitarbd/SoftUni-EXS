function convertToObject(jsonStr) {
    let person = JSON.parse(jsonStr);

    let keys = Object.keys(person);

    for (let key of keys) {
        console.log(`${key}: ${person[key]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');