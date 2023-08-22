//Correct the time-string
function timeCorrect(timestring) {
  if (timestring === null) {
    return null
  }

  if (timestring.length === 0) {
    return ''
  }

  let arr = timestring.split(":").map(x => +x)
  if (arr.length === 3 && timestring.match(/[0-9]/g).length === 6) {
    if (arr[2] > 59) {
      arr[2] -= 60
      arr[1] += 1
    }
    if (arr[1] > 59) {
      arr[1] -= 60
      arr[0] += 1
    }
    while (arr[0] > 23) {
      arr[0] -= 24
    }

    for(let i = 0; i < arr.length; i++){
      if (arr[i] < 10){
        arr[i] = '0' + arr[i]
      }
    }

    return `${arr[0]}:${arr[1]}:${arr[2]}`
  }
  return null
}