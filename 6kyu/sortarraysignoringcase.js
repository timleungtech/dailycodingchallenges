//Sort Arrays (Ignoring Case)
sortme = function(names){
  return names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1
    if (a.toLowerCase() > b.toLowerCase()) return 1
    return 0
  })
}