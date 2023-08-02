//Deodorant Evaporator
function evaporator(content, evap_per_day, threshold){ 
  let days = 0
  let percentage = 100
  while (percentage > threshold){
    percentage -= percentage * (evap_per_day/100)
    days++
  }
  return days
}