//Data Reverse
function dataReverse(data) {
  let res = []
  while (data.length > 0){
    res.push(data.splice(-8))
  }
  return res.flat(Infinity)
}