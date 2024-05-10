//Organise duplicate numbers in list
function group(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++){
    if (i == arr.indexOf(arr[i])){
      res.push([arr[i]])
    } else {
      res[res.findIndex(x => x[0] == arr[i])].push(arr[i])
    }
  }
  return res
}