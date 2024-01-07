//Sort by Example
function exampleSort(arr, exampleArr){
  let res = []
  for(let i = 0; i < exampleArr.length; i++){
    let count = arr.filter(x => x == exampleArr[i]).length
    while (count > 0){
      res.push(exampleArr[i])
      count--
    }
  }
  return res
}