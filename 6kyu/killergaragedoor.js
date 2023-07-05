//Killer Garage Door
function door(events) {
  let position = 0
  let paused = true
  let up = true
  let output = ''

  // log time with no event and trim from beginning of string
  while (events[0] === '.') {
    output += '0'
    events = events.slice(1)
  }

  // split into array to use forEach method
  events = events.split('')

  events.forEach(x => {
    switch (x) {
      case 'O':
        // switch directions and move 1
        up = !up
        if (up) {
          if (position !== 5) {
            position += 1
          }
          output += position.toString()
        } else {
          if (position !== 0) {
            position -= 1
          }
          output += position.toString()
        }
        break
      case 'P':
        // toggle pause
        paused = !paused
        // if paused, log position
        if (paused) {
          output += position.toString()
          // if not paused, going up, and position is not 5, move up 1
        } else if (up) {
          if (position !== 5) {
            position += 1
          }
          output += position.toString()
          // if not paused, going down, and position is not 0, move down 1
        } else {
          if (position !== 0) {
            position -= 1
          }
          // log position
          output += position.toString()
        }
        break
      case '.':
        // if paused, log position
        if (paused) {
          output += position.toString()
          // if not paused, going up, and position is not 5, move up 1
        } else if (up) {
          if (position !== 5) {
            position += 1
          }
          // if not paused, going up, and position is 5, set paused to true and up to false
          if (position === 5) {
            paused = true
            up = false
          }
          // log position
          output += position.toString()
        } else {
          // if not paused, going down, and position is not 0, move down 1
          if (position !== 0) {
            position -= 1
          }
          // if not paused, going down, and position is 0, set paused to true and up to true
          if (position === 0) {
            paused = true
            up = true
          }
          // log position
          output += position.toString()
        }
        break
    }
  })
  return output
}