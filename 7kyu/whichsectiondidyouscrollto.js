//Which section did you scroll to?
function getSectionIdFromScroll(scrollY, sizes){
  let upper = []
  let count = 0
  for (let i = 0; i < sizes.length; i++){
   count += sizes[i]
   upper.push(count)
  }
  
  // return an index of section or -1 if past last section
  if (scrollY >= upper[upper.length - 1]) return -1
  
  for (let j = upper.length - 1; j >= 0; j--){
    if (scrollY >= upper[j]) return j + 1
  }
  return 0
}