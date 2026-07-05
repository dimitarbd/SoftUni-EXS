function theAngryCat(arr, entryPoint, type) {
    let left = arr.splice(0, entryPoint);
    let breakPoint = arr.shift();
    let right = arr;
    let leftSum = 0;
    let rightSum = 0;

for (let curr of left) {
    if (type == 'cheap') {
        leftSum += curr < breakPoint ? curr : 0;
    } else {
        leftSum += curr >= breakPoint ? curr : 0;
    }
}
for (let curr of right) {
    if (type == 'cheap') {
        rightSum += curr < breakPoint ? curr : 0;
    } else {
        rightSum += curr >= breakPoint ? curr : 0;
    }
}

if (rightSum > leftSum) {
    console.log(`Right - ${rightSum}`);
} else {
    console.log(`Left - ${leftSum}`);
}
    
}
theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
