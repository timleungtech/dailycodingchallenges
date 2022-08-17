//Surface Area and Volume of a Box
function getSize(width, height, depth){
  let area = (2 * (width * height) + 2 * (width * depth) + 2 * (height * depth))
  let volume = width * height * depth
  let arr = []
  arr.push(area)
  arr.push(volume)
  return arr
}