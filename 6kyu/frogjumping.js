//Frog jumping
function solution(a) {
  let count = 0
  let i = 0
  while(i < a.length && i >= 0){
    i = i + a[i]
    count++
    if (count > a.length) return -1
  }
  return count
}