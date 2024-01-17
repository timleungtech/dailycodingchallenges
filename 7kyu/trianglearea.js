//Triangle area
function tArea(tStr) {
  // count \n in the string and calculate a = 0.5bh
  let countNbsp = (tStr.match(/\n/g) || []).length
  return 0.5 * (countNbsp-2) * (countNbsp-2)
}