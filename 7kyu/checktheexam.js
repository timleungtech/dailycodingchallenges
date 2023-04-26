//Check the exam
function checkExam(array1, array2) {
  let sum = 0
  for (let i = 0; i < array1.length; i++){
    if (array1[i] === array2[i]){
      sum += 4
    } else if (array2[i].length === 0){
      sum += 0
    } else {
      sum -= 1
    }
  }
  return sum > 0 ? sum : 0
}