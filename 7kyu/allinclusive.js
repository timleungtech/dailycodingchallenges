//All Inclusive?
function containAllRots(strng, arr) {
  let allRots = []
  let strArr = strng.split('')
  // gather allRots
  for(let i = 0; i < strArr.length; i++){
    let last = strArr.pop()
    strArr.unshift(last)
    allRots.push(strArr.join(''))
  }
  // check if allRots are in arr
  for(let i = 0; i < allRots.length; i++){
    if(!arr.includes(allRots[i])){
      return false
    }
  }
  return true
}