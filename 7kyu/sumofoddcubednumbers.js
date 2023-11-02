//Sum of Odd Cubed Numbers
function cubeOdd(arr) {
  return arr.filter(x => typeof x != 'number').length > 0 ? undefined : arr.filter(x => x % 2 == 1 || x % 2 == -1).reduce((a, c) => a + c**3, 0)
}