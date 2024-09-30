//Perpendicular lines
// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.
function maxBisectors(n) {
  return Math.floor(n/2) * Math.ceil(n/2)
}