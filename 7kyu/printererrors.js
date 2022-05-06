//Printer Errors
function printerError(s) {
    let errors = 0
    let chars = s.split('')
    for (let i = 0; i < s.length; i++){
      if (chars[i] === "n" || chars[i] === "o" || chars[i] === "p" || chars[i] === "q" || chars[i] === "r" || chars[i] === "s" || chars[i] === "t" || chars[i] === "u" || chars[i] === "v" || chars[i] === "w" || chars[i] === "x" || chars[i] === "y" || chars[i] === "z") {
        errors = errors + 1
      }
    }
    return `${errors}/${s.length}`
}