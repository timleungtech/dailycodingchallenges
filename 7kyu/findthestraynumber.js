//Find the stray number
function stray(numbers) {
    numbers.sort()
    return numbers[0] == numbers[1] ? numbers[numbers.length - 1] : numbers[0]
}