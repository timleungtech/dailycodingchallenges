//Most profit from stock quotes
function getMostProfitFromStockQuotes(quotes) {
  let totalProfit = []
  while (quotes.length > 0){
    let max = Math.max(...quotes)
    let maxIndex = quotes.findIndex(x => x === max)
    let subArr = quotes.splice(0, maxIndex + 1)
    let subArrProfit = subArr.reduce((a, c) => a + subArr[maxIndex] - c, 0)
    totalProfit.push(subArrProfit)
  }
  return totalProfit.reduce((a, c) => a + c)
}