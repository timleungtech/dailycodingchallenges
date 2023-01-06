//Take the Derivative
function derive(coefficient,exponent) {
  let product = coefficient * exponent
  exponent = exponent - 1
  return `${product}x^${exponent}`
}