//Vowel one
function vowelOne(s){
    return [...s].map(x => 'aeiouAEIOU'.includes(x) ? 1 : 0).join('')
  }

// function vowelOne(s){
//     s = s.toLowerCase()
//     return s.split('').map(x => {
//       if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
//         return '1'
//       } else {
//         return '0'
//       }
//     }).join('')
// }