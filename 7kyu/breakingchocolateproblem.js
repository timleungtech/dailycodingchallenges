//Breaking chocolate problem
function breakChocolate(n,m) {
  return (n > 0 && m > 0) ? (Math.min(n, m) - 1) + (Math.max(n, m) - 1) * (Math.min(n, m)) : 0
}