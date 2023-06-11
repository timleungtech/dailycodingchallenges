//Help Suzuki count his vegetables....
function countVegetables(string){
  const foods = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
  const words = string.split(' ').filter(x => foods.includes(x))
  let res = []
  const object = words.reduce((obj, key) => {
    if (obj[key]){
      obj[key]++
    } else {
      obj[key] = 1
    } return obj
  },{})
  const keys = Object.keys(object)
  const values = Object.values(object)
  for(let i = 0; i < keys.length; i++){
    res.push([values[i], keys[i]])
  }
  return res.sort((a, b) => a[0] === b[0] ? b[1].localeCompare(a[1]) : b[0] - a[0])
}