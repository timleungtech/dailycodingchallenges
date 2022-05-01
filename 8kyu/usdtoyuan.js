//USD => CNY
function usdcny(usd) {
  const yuan = usd * 6.75
  // toFixed for decimal places
  return (yuan.toFixed(2) + " " + "Chinese Yuan")
}