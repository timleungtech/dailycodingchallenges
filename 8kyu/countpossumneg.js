// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    let count = 0, sum = 0
    let result = []
    
    if (input == null || input.length == 0){
      return []
    } else{
        for(let i = 0; i < input.length; i++){
          if (input[i] > 0){
            count += 1
          } else {
            sum += input[i]
          }
        }
      }
    result = [count, sum]
    return result
}