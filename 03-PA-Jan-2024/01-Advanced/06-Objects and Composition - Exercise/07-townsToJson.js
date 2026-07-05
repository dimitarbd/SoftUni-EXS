function townsToJson(arr) {
    let towns = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split('|').map(x => x.trim()).filter(x => !!x);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let result = {
            Town : town,
            Latitude : Number (latitude),
            Longitude : Number (longitude)
        };
        let str = JSON.stringify(result)
        // console.log(str);
        towns.push(str);
    }
    console.log("[" + towns.join(",") + "]");
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
console.log('===============');
townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);