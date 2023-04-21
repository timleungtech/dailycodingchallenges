//Remove anchor from URL
function removeUrlAnchor(url){
  const idx = url.split('').findIndex(x => x === '#')
  return (idx === -1) ? url : url.slice(0, idx)
}