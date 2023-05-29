//Count characters in your string
function count (string) {  
  let count = {}
  string.split('').forEach(s => {
     count[s] ? count[s]++ : count[s] = 1
  })
  return count
}

// function count (string) {  
//   string = string.split('')

//   const chars = string.reduce(function(obj, item) {
//     if (!obj[item]) {
//       obj[item] = 0;
//     }
//     obj[item]++;
//     return obj;
//   }, {});

//   return chars
// }