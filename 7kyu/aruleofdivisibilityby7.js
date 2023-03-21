//A Rule of Divisibility by 7
function seven(m) {
  let i = 0
  let lastDigit
  while (m >= 100) {
    if (m % 7 === 0 && m < 100){
      return m
    } else {
      m = m.toString().split('')
      lastDigit = Number(m.pop())
      m = Number(m.slice(0, m.length).join('')) - (2 * lastDigit)
      i++
    }
  }
  return [Number(m), i]
}