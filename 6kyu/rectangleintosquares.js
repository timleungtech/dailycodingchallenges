//Rectangle into Squares
function sqInRect(lng, wdth) {
  let area = lng * wdth
  let result = []
  if (lng === wdth) return null
  else {
    while (area > 0) {
      result.push(Math.min(lng, wdth))
      if (lng > wdth){
        lng = lng - wdth
      } else {
        wdth = wdth - lng
      }
      area = lng * wdth
    }
  }
  return result
}