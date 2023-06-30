//Crash Override
function aliasGen(first, last){
  let firstInitial = first.charAt(0).toUpperCase()
  let lastInitial = last.charAt(0).toUpperCase()
  return firstInitial.match(/[A-Z]/g) && lastInitial.match(/[A-Z]/g) ? `${firstName[firstInitial]} ${surname[lastInitial]}` : "Your name must start with a letter from A - Z."
}