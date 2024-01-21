//1st way:
/*
function findMaxNumber(arr) {
    return Math.max(...arr);
}
*/

//2nd Way
/*
function findMaxNumber(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1];
}
*/

//3rd Way
function findMaxNumber(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

module.exports = findMaxNumber;
