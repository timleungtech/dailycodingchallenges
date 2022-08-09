//Is it a palindrome?
function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}