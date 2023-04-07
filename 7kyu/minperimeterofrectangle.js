//Minimum Perimeter of a Rectangle
function minimumPerimeter(area) {
  let arr = []
  for (let i = 1; i <= Math.floor(area**.5); i++) {
    if (area % i === 0) {
      arr.push(i)
    }
  }
  let length = arr.pop()
  let width = area / length
  let perimeter = 2 * length + 2 * width
  return perimeter
}