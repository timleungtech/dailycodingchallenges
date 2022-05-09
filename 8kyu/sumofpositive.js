//Sum of positive
function positiveSum(arr) {
    // remove neg nums from arr
    let arrayWithoutNegNums = arr.filter(num => num > 0);
    // sum array elements
    let initialValue = 0;
    let sumWithInitial = arrayWithoutNegNums.reduce(
      (previousValue, currentValue) => previousValue + currentValue, initialValue
    )
    return sumWithInitial
}