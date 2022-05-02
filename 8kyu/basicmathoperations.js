//Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  let result = 0
  if (operation === "+"){
    result = value1 + value2
  } else if (operation === "-"){
    result = value1 - value2
  } else if (operation === "*"){
    result = value1 * value2
  } else if (operation === "/"){
    result = value1 / value2
  }
  return result
}