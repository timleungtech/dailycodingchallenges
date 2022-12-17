//SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
  return a.reduce((a, c) => a + c**2, 0) > b.reduce((a, c) => a + c**3, 0)
}