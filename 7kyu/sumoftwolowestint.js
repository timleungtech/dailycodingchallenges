//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a,b) => a-b)
    return numbers[0] + numbers[1]
}