//Sum without highest and lowest number
function sumArray(array) {
    if (array == null || array == 0){
      return 0
    } else {
        let sorted = array.sort((a, b) => a - b)
        let newArr = sorted.slice(1, sorted.length - 1)
        let sum = newArr.reduce((sum, curr) => sum + curr, 0)
        return sum
      }
}