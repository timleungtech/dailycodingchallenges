//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    // concat arrays
    let newArr = arr1.concat(arr2)
    // sort numbers
    newArr.sort(function (a, b) { return a - b });
    // remove duplicates
    let uniqueChars = [...new Set(newArr)];
    return uniqueChars
}