//Sum of Triangular Numbers
function sumTriangularNumbers(n) {
  if (n <= 0) return 0
  let tri_num = 0
  let sum = 0
  for (let i = 0; i < n; i++){
    tri_num += i + 1
    sum += tri_num
  }
  return sum 
}