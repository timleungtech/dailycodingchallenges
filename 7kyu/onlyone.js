//Only one
function onlyOne(...a) {
  return a.filter(x => x).length == 1
}