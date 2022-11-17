//Get the mean of an array
function getAverage(marks){
  return Math.floor(marks.reduce((a, c) => a + c)/marks.length)
}