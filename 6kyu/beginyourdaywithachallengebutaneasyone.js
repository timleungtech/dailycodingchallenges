//Begin your day with a challenge, but an easy one.
function oneTwoThree(n) {
  if (!n) return ['0', '0']
  let m = Math.floor(n/9)
  return n % 9 === 0 ? ['9'.repeat(m).toString(), '1'.repeat(n)] : ['9'.repeat(m) + (n % 9).toString(), '1'.repeat(n)]
}