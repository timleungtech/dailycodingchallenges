//Sum consecutives
function sumConsecutives(s) {
  let res = []
  let sum = s[0]
  for (let i = 0; i < s.length; i++){
    if (s[i] == s[i+1]){
      sum += s[i]
    } else {
      res.push(sum)
      sum = s[i+1]
    }
  }
  return res
}