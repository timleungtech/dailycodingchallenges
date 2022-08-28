//Smallest unused ID
function nextId(ids) {
    let uniqueids = [...new Set(ids)];
    console.log(uniqueids)
    uniqueids.sort((a, b) => a - b)
    if (uniqueids[0] !== 0) return 0
    for (let i = 1; i < uniqueids.length; i++) {
      if (uniqueids[i] !== uniqueids[i - 1] + 1) {
        return uniqueids[i - 1] + 1
      }
    }
    return uniqueids.length
}