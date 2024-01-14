//What century is it?
function whatCentury(year){
  let century = (+year.slice(0, 2)).toString()
  
  // round up for years that do not end in '00'
  if (+year % 100 > 0) century = (+year.slice(0, 2) + 1).toString()
  
  let th = ['0', '4', '5', '6', '7', '8', '9']
  let st = ['1']
  let nd = ['2']
  let rd = ['3']
  
  if (century == '11' || century == '12' || century == '13') century += 'th'
  else if (th.includes(century[1])) century += 'th'
  else if (st.includes(century[1])) century += 'st'
  else if (nd.includes(century[1])) century += 'nd'
  else if (rd.includes(century[1])) century += 'rd'
  
  return century
}