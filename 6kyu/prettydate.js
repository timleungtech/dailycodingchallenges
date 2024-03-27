//Pretty date
function toPretty(seconds){
  switch (true) {
    case seconds == 0:
      return 'just now'
      break
    case seconds == 1:
      return `a second ago`
      break
    case seconds < 60:
      return `${seconds} seconds ago`
      break
    case seconds < 120:
      return `a minute ago`
      break
    case seconds < 3600:
      return `${Math.floor(seconds/60)} minutes ago`
      break
    case seconds < 7200:
      return `an hour ago`
      break
    case seconds < 86400:
      return `${Math.floor(seconds/3600)} hours ago`
      break
    case seconds < 172800:
      return `a day ago`
      break
    case seconds < 604800:
      return `${Math.floor(seconds/86400)} days ago`
      break
    case seconds < 1209600:
      return `a week ago`
      break
    case seconds < 31449600:
      return `${Math.floor(seconds/604800)} weeks ago`
      break
    default:
      return `52 weeks ago`
  }
}