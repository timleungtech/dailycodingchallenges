//If you can't sleep, just count sheep!!
var countSheep = function (num){
    let arr = []
    for (let i = 1; i <= num; i++){
      arr.push(i + ' sheep...')  
    }
    return arr.join('')
}