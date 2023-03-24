//Basic Sequence Practice
function sumOfN(n) {
  let arr = []
  let sum = 0
  for (let i = 1; i <= Math.abs(n); i++){
    sum += i
    arr.push(sum)
  }
  if (n < 0){
    arr = arr.map(x => -x)
    arr.unshift(0)
    return arr
  }
  arr.unshift(0)
  return arr
};