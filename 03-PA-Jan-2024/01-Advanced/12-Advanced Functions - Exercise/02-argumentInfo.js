function argumentInfo(...data) {
    let res = {};

    for (let el of data) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if (!res.hasOwnProperty(type)) {
            res[type] = 0;
        }
        res[type] += 1;
    }

    let sortResult = Object.entries(res).sort((a, b) =>b[1] - a[1]);
    for(let [k, v] of sortResult) {
        console.log(`${k} = ${v}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
