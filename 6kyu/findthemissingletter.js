//Find the missing letter
function findMissingLetter(array){
  for (let i = 0; i < array.length - 1; i++){
    if (array[i].charCodeAt(0) != +array[i+1].charCodeAt(0) - 1){
      return String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
  }
}