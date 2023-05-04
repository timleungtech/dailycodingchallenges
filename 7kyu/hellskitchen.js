//Hells Kitchen
function gordon(a){
  a = a.split('')
  for (let i = 0; i < a.length; i++){
    if (a[i] === 'a'){
      a.splice(i, 1, '@')
    } else if (a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u'){
      a.splice(i, 1, '*')
    }
  }
  return a.join('').toUpperCase().split(' ').join('!!!! ') + '!!!!'
}