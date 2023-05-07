//Return the closest number multiple of 10
const closestMultiple10 = num => {
  return num % 10 < 5 ? Math.floor(num/10)*10 : Math.ceil(num/10)*10
}