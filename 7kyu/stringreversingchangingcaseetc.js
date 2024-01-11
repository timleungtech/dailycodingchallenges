//String Reversing, Changing case, etc.
function reverseAndMirror(s1,s2) {
  // invert case for s1
  s1 = s1.split('')
  for (let i = 0; i < s1.length; i++){
    if (s1[i] == s1[i].toUpperCase()){
      s1[i] = s1[i].toLowerCase()    
    } else {
      s1[i] = s1[i].toUpperCase() 
    }
  }
  s1 = s1.join('')
  
  // invert case for s2
  s2 = s2.split('')
  for (let i = 0; i < s2.length; i++){
    if (s2[i] == s2[i].toUpperCase()){
      s2[i] = s2[i].toLowerCase()    
    } else {
      s2[i] = s2[i].toUpperCase() 
    }
  }
  s2 = s2.join('')
  
  return s2.split('').reverse().join('') + '@@@' + s1.split('').reverse().join('') + s1
}