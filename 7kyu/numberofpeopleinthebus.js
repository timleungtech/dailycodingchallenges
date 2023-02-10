//Number of People in the Bus
var number = function(busStops){
  return busStops.map(x => x[0] - x[1]).reduce((a, c) => a + c)
}