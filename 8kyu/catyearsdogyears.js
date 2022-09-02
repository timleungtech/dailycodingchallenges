//Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
    let arr = [0,0,0]
    if (humanYears === 1){
      arr[0] = 1
      arr[1] = 15
      arr[2] = 15
    } else if (humanYears === 2){
      arr[0] = 2
      arr[1] = 24
      arr[2] = 24
    } else {
      arr[0] = humanYears
      arr[1] = 24 + (humanYears - 2) * 4
      arr[2] = 24 + (humanYears - 2) * 5
    }
    return arr;
}