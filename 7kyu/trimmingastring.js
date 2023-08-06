//Trimming a string
function trim(str, size) {
  if (str.length <= size){
    return str
  } else if (str.length < 4){
    return str.slice(0, size) + '...'
  } else if (str.length > size && size < 4){
    return str.slice(0, size) + '...'
  } else if (str.length > size){
    return str.slice(0, size - 3) + '...'
  } 
}