//Range Extraction
function solution(list){
  let result = []
  let range = []
  for (let i = 0; i <= list.length; i++) {
    if (range.length == 0){
      range.push(list[i])
    } else if (list[i] == list[i-1]+1){
      range.push(list[i])
    } else {
        if (range.length < 3){
          result.push(range)
          range = [list[i]]
        } 
        else if (range.length >= 3) {
          result.push(range[0])
          result.push('-')
          result.push(range[range.length - 1])
          range = [list[i]]
        }
    }
    // console.log('index', i)
    // console.log('range', range)
    // console.log('result', result)
  }
  return result.flat().join(',').replaceAll(',-,','-')
}