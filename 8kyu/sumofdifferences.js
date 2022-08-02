//Sum of differences in array
function sumOfDifferences(arr) {
    let sum = 0
    arr.sort((a,b) => b-a)
    for(let i = 0; i < arr.length - 1; i++){
      sum += arr[i]-arr[i+1]
    }
    return sum
}