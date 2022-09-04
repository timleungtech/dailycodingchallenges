//Multiplication table for number
function multiTable(number) {
    let product = 1
    let str = `1 * ${number} = ${number}`
    for (let i = 2; i <= 10; i++) {
      product = i * number
      str += `\n${i} * ${number} = ${product}`
    }
    return str
}