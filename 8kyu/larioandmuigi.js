//Lario and Muigi Pipe Problem
function pipeFix(numbers) {
    let arr = [Math.min(...numbers)]
    for (let i = Math.min(...numbers) + 1; i <= Math.max(...numbers); i++) {
      arr.push(i)
    }
    return arr
}