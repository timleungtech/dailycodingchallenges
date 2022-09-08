//Palindrome Strings
function isPalindrome(line) {
    if (typeof line === 'number'){
      line = line.toString()
    }
    let reverse = line.split('').reverse().join('')
    return line === reverse
}