//Valid Phone Number
function validPhoneNumber(phoneNumber){
  const regex = /[0-9]/g
  let arr = phoneNumber.split('')
  if (
     (phoneNumber[0] === "(" ) && 
     (phoneNumber[4] === ")" ) &&
     (phoneNumber[5] === " " ) &&
     (phoneNumber[9] === "-" ) ){
    return (arr.join('').length === 14) && (arr.join('').match(regex).length === 10)
  }
  return false
}