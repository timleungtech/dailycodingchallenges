//Cats and shelves
function solution(start, finish){
  let difference = finish - start
  return Math.floor(difference / 3) + difference % 3
}

function solution(start, finish){
  let jumps = 0
  while (finish - start >= 3){
    start += 3
    jumps++
  }
  while (finish - start !== 0){
    start++
    jumps++
  }
  return jumps
}