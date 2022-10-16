//Find the capitals
var capitals = function (word) {
    let arr = word.split('')
    let arr2 = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === arr[i].toUpperCase()){
        arr2.push(arr.indexOf(arr[i]))
      }
    }
    return arr2
};