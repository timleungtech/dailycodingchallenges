//Highest and Lowest
function highAndLow(numbers){
    const array = numbers.split(' ')
    return (Math.max(...array) + " " + Math.min(...array))
}