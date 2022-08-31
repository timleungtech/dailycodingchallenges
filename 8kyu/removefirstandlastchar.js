//Remove First and Last Character Part Two
function array(arr) {
    let arr2 = []
    arr = arr.split(',')
    if (arr.length < 3) return null
    else {
      arr2 = arr.pop()
      arr2 = arr.shift()
      arr = arr.join(' ')
      return arr
    }
}