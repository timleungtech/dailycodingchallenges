//Well of Ideas - Easy Version
function well(x){
    let good = x.filter(x => x === 'good').length
    if (good > 2){
      return 'I smell a series!'
    } else if (good > 0){
        return 'Publish!'
    } else {
        return 'Fail!'
    }
}