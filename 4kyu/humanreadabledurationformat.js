//Human readable duration format
function formatDuration (seconds) {
  if (seconds === 0) return 'now'
  let arr = []

  if (Math.floor(seconds / 86400 / 365) === 1) {
    arr.push('1 year')
    seconds -= 86400 * 365
  } else if (seconds > 86400 * 365) {
    arr.push(Math.floor(seconds / 86400 / 365) + ' years')
    seconds -= 86400 * 365 * Math.floor(seconds / 86400 / 365)
  }

  if (Math.floor(seconds / 86400) === 1) {
    arr.push('1 day')
    seconds -= 86400
  } else if (seconds > 86400) {
    arr.push(Math.floor(seconds / 86400) + ' days')
    seconds -= 86400 * Math.floor(seconds / 86400)
  }

  if (Math.floor(seconds / 3600) === 1) {
    arr.push('1 hour')
    seconds -= 3600
  } else if (seconds > 3600) {
    arr.push(Math.floor(seconds / 3600) + ' hours')
    seconds -= 3600 * Math.floor(seconds / 3600)
  }

  if (Math.floor(seconds / 60) === 1) {
    arr.push('1 minute')
    seconds -= 60
  } else if (seconds > 60) {
    arr.push(Math.floor(seconds / 60) + ' minutes')
    seconds -= 60 * Math.floor(seconds / 60)
  }

  if (seconds === 1) {
    arr.push('1 second')
  } else if (seconds > 1) {
    arr.push(seconds + ' seconds')
  }

  let lastElement = arr[arr.length - 1]
  return arr.length === 1 ? arr[0] : arr.slice(0, -1).join(', ').concat(` and ${lastElement}`)
}