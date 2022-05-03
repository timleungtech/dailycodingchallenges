//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft){
      return true
    } else {
      return false
    }
}