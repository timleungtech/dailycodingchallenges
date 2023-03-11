//Sum of Cubes
function sumCubes(n){
  let array = []
  for(let i = 1; i <= n; i++){
    array.push(i)
  }
  return array.map(x => x**3).reduce((a, c) => a + c)
}