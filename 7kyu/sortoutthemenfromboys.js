//Sort Out The Men From Boys
function menFromBoys(arr){
    let men = []
    let boys = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) men.push(arr[i])
      else boys.push(arr[i])
    }
    men = [...new Set(men)]
    boys = [...new Set(boys)]
    return men.sort((a, b) => a - b).concat(boys.sort((a, b) => b - a))
}