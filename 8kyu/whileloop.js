//Training JS #9: loop statement --while and do..while
function padIt(str,n){
    let i = 0
    while (i < n){
      if (i % 2 === 0){
        str = str.padStart(str.length + 1, '*')  
      } else {
        str = str.padEnd(str.length + 1, '*')
      }
      i++
    }
    return str
}