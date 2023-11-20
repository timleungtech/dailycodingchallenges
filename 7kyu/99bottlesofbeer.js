//99 Bottles of Beer
var sing = function () {
  let num = 99
  let arr = []
  while(num > 2){
    arr.push(`${num} bottles of beer on the wall, ${num} bottles of beer.`)
    arr.push(`Take one down and pass it around, ${num-1} bottles of beer on the wall.`)
    num--
  }
  while(num === 2){
    arr.push(`${num} bottles of beer on the wall, ${num} bottles of beer.`)
    arr.push(`Take one down and pass it around, 1 bottle of beer on the wall.`)
    num--
  }
  while(num === 1){
    arr.push('1 bottle of beer on the wall, 1 bottle of beer.')
    arr.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
    num--
  }
  while(num === 0){
    arr.push("No more bottles of beer on the wall, no more bottles of beer.")
    arr.push("Go to the store and buy some more, 99 bottles of beer on the wall.")
    num--
  }
  return arr
};