//Cyclops numbers
function cyclops(n) {
  let n_bin = n.toString(2)
  // n_bin needs to be odd
  // n_bin middle value must be 0
  // n_bin must have only one 0
  return n_bin.length % 2 === 1 && n_bin.charAt(Math.floor(n_bin.length / 2)) == 0 && n_bin.split('').filter(x => x == 0).length == 1
}