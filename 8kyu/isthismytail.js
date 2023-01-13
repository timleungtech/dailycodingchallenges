//Is this my tail?
function correctTail(body, tail){
  let sub = body.substr(body.length - 1)
  return sub == tail
}