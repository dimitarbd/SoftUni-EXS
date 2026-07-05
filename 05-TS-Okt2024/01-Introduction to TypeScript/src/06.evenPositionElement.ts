function evenPosition(arr: Array<unknown>) {
    let evenArr: Array<unknown> = [];

    for (let i = 0; i < arr.length; i += 2) {
        evenArr.push(arr[i]);
    }
    console.log(evenArr.join(' '));    
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);
