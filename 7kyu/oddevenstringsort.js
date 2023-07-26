//Odd-Even String Sort
function sortMyString(S) {
  let res = []
  S.split('')
  for(let i = 0; i < S.length; i+=2){
    res.push(S[i])
  }
  res.push(' ')
  for(let i = 0; i < S.length; i+=2){
    res.push(S[i+1])
  }
  return res.join('')
}