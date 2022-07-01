//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    if      (current === 'green') {return 'yellow'
  } else if (current === 'yellow'){return 'red'
  } else                          {return 'green'
  }
}