//A Strange Trip to the Market
function isLockNessMonster(s) {
  return /tree fiddy|three fifty|3.50/.test(s)
}

function isLockNessMonster(s) {
  return s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")
}