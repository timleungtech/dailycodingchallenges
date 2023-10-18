//Next bigger number with the same digits
function nextBigger(n){
  let arr = n.toString().split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i+1] > arr[i]){

      let z = Math.min(...arr.slice(i+1).filter(x => x > arr[i]))

      let temp = arr[i]
      arr[i] = z
      arr[arr.lastIndexOf(`${z}`)] = temp

      let q = arr.slice(0, i+1)
      let w = arr.slice(i+1).sort((a, b) => a - b)

      return +q.concat(w).join('')
    }
  }
  return -1
}