//Cycle a list of values
function cycle(dir, arr, cur) {
  if (!arr.includes(cur)) return null
  if (dir > 0 && arr.indexOf(cur) == arr.length - 1) return arr[0]
  if (dir < 0 && arr[arr.indexOf(cur)] == arr[0]) return arr[arr.length - 1]
  return dir > 0 ? arr[arr.indexOf(cur) + 1] : arr[arr.indexOf(cur) - 1]
}