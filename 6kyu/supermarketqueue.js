//The Supermarket Queue
function queueTime(customers, n) {
  if (customers.length === 0) return 0
  if (n > customers.length){
    n = customers.length
  }
  let serviceTime = []
  let lineNum = 0
  for (let i = 0; i < n; i++) {
    serviceTime.push(customers[i])
  }
  for (i = n; i < customers.length; i++) {
    lineNum = serviceTime.indexOf(Math.min(...serviceTime))
    serviceTime[lineNum] += customers[i]
  }
  return(Math.max(...serviceTime))
}