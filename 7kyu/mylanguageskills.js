//My Language Skills
function myLanguages(results) {
  let arr = []
  for (let language in results) {
    arr.push([language, results[language]])
  }
  return arr.filter(x => x[1] >= 60).sort((a, b) => b[1] - a[1]).map(x => x[0])
}