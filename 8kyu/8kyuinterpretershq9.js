//8kyu interpreters: HQ9+
function HQ9(code) {
  if (code === 'H') return 'Hello World!'
  else if (code === 'Q') return code
  else if (code === '9') {
    let bottles = 99
    let str = ''
    while (bottles > 2){
      str += `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\nTake one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`
      bottles--
    }
    str += '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    return str
  }
  return undefined
}