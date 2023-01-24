//Maximum Length Difference
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1
  } else {
    let a1Max = a1.sort((a, b) => b.length - a.length)[0].length
    let a1Min = a1.sort((a, b) => a.length - b.length)[0].length
    let a2Max = a2.sort((a, b) => b.length - a.length)[0].length
    let a2Min = a2.sort((a, b) => a.length - b.length)[0].length
    return (a1Max - a2Min) > (a2Max - a1Min) ? (a1Max - a2Min) : (a2Max - a1Min)
  }
}