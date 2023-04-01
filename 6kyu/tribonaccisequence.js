//Tribonacci Sequence
function tribonacci(signature,n){
  let arr = signature
  for (let i = 3; i < n; i++){
    arr.push( arr[i-3] + arr[i-2] + arr[i-1] )
  }
  return arr.slice(0, n)
}