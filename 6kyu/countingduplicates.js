//Counting Duplicates
function duplicateCount(text) {
    let dupArr = []
    let arr = text.toLowerCase().split('').sort()
    // push duplicate elements to dupArr
    for (let i = 1; i <= arr.length; i++){
      if(arr[i] === arr[i-1]){
        dupArr.push(arr[i])
      }
    }
    // remove duplicates
    let uniqueDupeChars = [...new Set(dupArr)]
    return uniqueDupeChars.length
}