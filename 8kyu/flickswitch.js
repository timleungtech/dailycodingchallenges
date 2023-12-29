//Flick Switch
function flickSwitch(arr){
  let bool = true
  let res = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'flick'){
      bool = !bool
    }
    res.push(bool)
  }
  return res
}