//Expressions Matter
function expressionMatter(a, b, c) {
  let res = 0
  if (a+b+c > res){ res = a+b+c } 
  if (a*b*c > res){ res = a*b*c } 
  if ((a+b)*c > res){ res = (a+b)*c } 
  if ((a*b)+c > res){ res = (a*b)+c } 
  if (a+(b*c) > res){ res = a+(b*c) } 
  if (a*(b+c) > res){ res = a*(b+c) }
  return res
}