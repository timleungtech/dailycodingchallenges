//Compare within margin
function closeCompare(a, b, margin){
  if (!margin) {
    margin = 0
  }
  if (margin >= Math.abs(a-b)) return 0
  else if (a<b) return -1
  else if (a>b) return 1
}