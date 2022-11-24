//Short Long Short
function solution(a, b){
  return a.length < b.length ? a + b + a : b + a + b
}