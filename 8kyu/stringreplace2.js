//Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  for (let i = 0; i < n; i++){
    s = s.replace('!', '')
  }
  return s
}