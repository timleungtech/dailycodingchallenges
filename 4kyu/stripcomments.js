//Strip Comments
function solution(input, markers) {
  let arr = input.split('\n')
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < markers.length; j++){
      let markerIndex = arr[i].indexOf(markers[j])
      if (markerIndex !== -1){
        arr[i] = arr[i].slice(0, markerIndex)
      }
      arr[i] = arr[i].trim()
    }
  }
  arr = arr.join('\n')
  return arr
}