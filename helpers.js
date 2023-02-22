// Equations to find mean median and mode from 

function findMean(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}

function findMedian(nums) {
    nums.sort((a, b) => a - b);
    if (nums.length % 2 === 0) {
        return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    } else {
        return nums[Math.floor(nums.length / 2)];
    }
}

function findMode(nums) {
    let modeObj = {};
    nums.forEach(num => {
        if (modeObj[num]) {
            modeObj[num]++;
        } else {
            modeObj[num] = 1;
        }
    });
    let maxFreq = 0;
    let mode;
    for (let num in modeObj) {
        if (modeObj[num] > maxFreq) {
            maxFreq = modeObj[num];
            mode = num;
        }
    }
    return mode;
}

// function to convert string to array of numbers and check if all numbers

function convertAndValidateNums(nums) {
    let numArr = nums.split(',').map(num => {
        if (isNaN(num)) {
            throw new Error(`${num} is not a number`);
        }
        return +num;
    });
    return numArr;
}

module.exports = { findMean, findMedian, findMode, convertAndValidateNums };