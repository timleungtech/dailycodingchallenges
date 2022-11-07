//Find the odd int
function findOdd(a) {
    const count = a.reduce(function (obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {})
  
    for (let key in count) {
      if (count[key] % 2 !== 0){
        return Number(key)
      }
    }
}