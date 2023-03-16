//Power of two
function isPowerOfTwo(n){
  return (Math.log10(n) / Math.log10(2)) % 1 === 0
}