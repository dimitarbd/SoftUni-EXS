function condenseArrayToNumber(nums) {
    let condensed = [];
   
    while (1 < nums.length) {
        for (let j = 0; j < nums.length - 1; j++) {
            condensed[j] = Number(nums[j]) + Number(nums[j + 1]);
        }
        nums = condensed;
        condensed = [];
    };

    console.log(Number(nums));
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);