//Array.diff
function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++){
      a = a.filter(x => x !== b[i])  
    }
    return a
}