//All Star Code Challenge #18
function strCount(str, letter){  
    let count = 0
    str.split('')
    for (let i = 0; i < str.length; i++){
      if (str[i] === letter) count++
    }
    return count
}