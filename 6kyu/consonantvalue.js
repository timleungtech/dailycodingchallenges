//Consonant value
function solve(s) {
  let arrayOfConsonantStrings = s.match(/[^aeiou]+/gi)
  let highestValue = 0
  for (let i = 0; i < arrayOfConsonantStrings.length; i++){
    let subArr = arrayOfConsonantStrings[i].split('')
    let sum = subArr.map(x => x.charCodeAt(0) - 96).reduce((a, c) => a + c, 0)
    if (sum > highestValue){
      highestValue = sum
    }
  }
  return highestValue
}