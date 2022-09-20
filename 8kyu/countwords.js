//Count words
function countWords(str) {
    return str.split(/\s/).filter(x => x).length
}