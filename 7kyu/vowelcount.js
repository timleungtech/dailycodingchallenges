//Vowel Count
function getCount(str) {
  let vowelsCount = 0;
  vowelsCount += str.split('').filter(x => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u').length
  return vowelsCount;
}