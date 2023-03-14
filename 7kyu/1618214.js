//16+18=214
function add(num1, num2) {
  let result = []
  num1 = num1.toString().split('').reverse().map(x => Number(x))
  num2 = num2.toString().split('').reverse().map(x => Number(x))
  if (num1.length >= num2.length) {
    for (let i = 0; i < num1.length; i++) {
      result.push(num1[i] + (num2[i] || 0) )
    }
  } else {
      for (let i = 0; i < num2.length; i++) {
        result.push(num2[i] + (num1[i] || 0))
      }
  }
  return Number(result.map(x => x.toString()).reverse().join(''))
}