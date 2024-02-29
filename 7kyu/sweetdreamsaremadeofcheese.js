//Sweet Dreams are Made of Cheese
function payCheese(arr) {
  // 4 staff, produce 100 wheels every hour
  // pay rate 8.75
  // arr = wheels produced each day for 5 days
  // round hours up to nearest hour at end of week
  // find total wages
  let wheels = arr.reduce((a, c) => a + c)
  let hours = Math.ceil(wheels/100)
  let wages = hours * 8.75 * 4
  return `£${wages}`
}