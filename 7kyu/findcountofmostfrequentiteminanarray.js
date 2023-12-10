//Find Count of Most Frequent Item in an Array
function mostFrequentItemCount(collection) {
  if (!collection.length) return 0
  let data = collection.reduce((obj, item) => {
    if (!obj[item]){
      obj[item] = 0
    }
    obj[item]++
    return obj
    },{})
  return Math.max(...Object.values(data))
}

// function mostFrequentItemCount(collection) {
//   if (!collection.length) return 0
//   let data = collection.reduce((obj, item) => {
//     if (!obj[item]){
//       obj[item] = 0
//     }
//     obj[item]++
//     return obj
//     },{})
//   return Object.values(data).sort((a, b) => b - a)[0]
// }