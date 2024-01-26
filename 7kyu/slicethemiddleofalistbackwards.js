//Slice the middle of a list backwards
function reverseMiddle(array) {
  let mid = array.length/2
  
	return array.length % 2 == 0
  
  // if array length is even
  ? [array[mid], array[(mid) - 1]]
  
  // if array length is odd
  : [array[Math.floor(mid) + 1], array[Math.floor(mid)], array[Math.floor(mid) - 1]]
  
}