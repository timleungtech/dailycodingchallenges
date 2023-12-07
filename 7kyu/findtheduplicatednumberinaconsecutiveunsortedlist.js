// Find The Duplicated Number in a Consecutive Unsorted List
function findDup(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      return arr[i]
    }  
  }
}