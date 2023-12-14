//Closest to Zero
function closest(arr){
  let distances = arr.map(x => Math.abs(x))
  let closest = Math.min(...distances)
  return arr.find(x => x == closest) && arr.find(x => x == -closest) ? null : arr[distances.indexOf(closest)]
}