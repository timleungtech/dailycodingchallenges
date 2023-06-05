//Simple validation of a username with regex
function validateUsr(username) {
  //allowed characters: lowercase, numbers, underscore, between 4-16 characters (inclusive)
  let regex = /^[a-z0-9_]{4,16}$/
  let res =  regex.test(username)
  return res
}