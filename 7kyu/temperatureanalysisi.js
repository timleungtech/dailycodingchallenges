//Temperature analysis I
function lowestTemp(t) {
  return t.length > 0 ? Math.min(...t.split(' ').map(x => +x)) : null
}