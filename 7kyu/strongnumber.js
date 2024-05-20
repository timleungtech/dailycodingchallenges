//Strong Number (Special Numbers Series #2)
function strong(n) {
  n = n.toString().split('').map(x => +x)
  let sum = 0
  for (let i = 0; i < n.length; i++){
    let product = 1
    for (let j = 1; j <= n[i]; j++){
      product *= j
    }
    sum += product
  }
  return +n.join('') == sum ? "STRONG!!!!" : "Not Strong !!"
}