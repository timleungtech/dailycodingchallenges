//Meeting
function meeting(s) {
  // split string to elements in an array
  let arr = s.toUpperCase().split(';').map(x => x.split(':'))
  
  // complex sorting - sort by last name, then first name
  arr.sort((a, b) => {
    const lastNameA = a[1]
    const lastNameB = b[1]
    const firstNameA = a[0]
    const firstNameB = b[0]
    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    if (firstNameA < firstNameB) {
      return -1;
    }
    if (firstNameA > firstNameB) {
      return 1;
    }
  })

  // arrange into desired format
  let result = arr.map(x => `(${x[1]}, ${x[0]})`).join('')

  return result
}