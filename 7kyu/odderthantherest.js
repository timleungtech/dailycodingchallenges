//Odder Than the Rest
function oddOne(arr) {
  for (let i = 0; i < arr.length; i++){
    if (Math.abs(arr[i]) % 2 == 1) return i
  }
  return -1
}