//Remove First and Last Character
function removeChar(str){
    let array = str.split('')
    let newArr = array.splice(1, str.length - 2)
    let newStr = newArr.join('')
    return newStr
}