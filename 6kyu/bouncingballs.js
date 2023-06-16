//Bouncing Balls
function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window > h){
    return -1
  }
  let result = -1
  while (h > window){
    result += 2
    h = h * bounce
  }
  return result
}