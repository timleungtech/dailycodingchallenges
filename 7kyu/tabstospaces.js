//Tabs to spaces
function tabToSpaces( text ) {
  let rows = text.split('\n')
  let spaceStr = ''
  let res = []
  for(let i = 0; i < rows.length; i++){
    while (rows[i].includes('\t')){
      if (rows[i].indexOf('\t') % 4 == 0) spaceStr = '    '
      if (rows[i].indexOf('\t') % 4 == 1) spaceStr = '   '
      if (rows[i].indexOf('\t') % 4 == 2) spaceStr = '  '
      if (rows[i].indexOf('\t') % 4 == 3) spaceStr = ' '
      
      rows[i] = rows[i].replace('\t', spaceStr)
    }
    res.push(rows[i])
  }
  return res.join('\n')
}