//They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
function isOpposite(s1,s2){
    return s1.length > 0 ? [...s1].map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('') == s2 : false
}

// function isOpposite(s1,s2){
//     return s1.length > 0 ? [...s1].map(x => {
//       if (x == x.toUpperCase()){
//         return x.toLowerCase()
//       } else {
//         return x.toUpperCase()
//       }
//     }).join('') == s2 : false
// }