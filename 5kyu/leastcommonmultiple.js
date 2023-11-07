//Least Common Multiple
var lcm = function (...args) {
  let arr = [...args].sort((a, b) => b - a)
  if (arr.some(x => x == 0)) return 0
  let lcm = arr[0]
  while (arr.filter(x => lcm % x == 0).length != arr.length){
    lcm += arr[0]
  }
  return lcm || 1
}