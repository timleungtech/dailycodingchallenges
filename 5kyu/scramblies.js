//Scramblies
function scramble(str1, str2) {
  const letters = str1.split('')

  const available = letters.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {})

  let arr = str2.split('')
  for (let i = 0; i < str2.length; i++){
    if (available[arr[i]] > 0){
        available[arr[i]] -= 1
    } else {
      return false
    }
  }
  return true
}