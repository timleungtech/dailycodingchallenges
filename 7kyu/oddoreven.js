//Odd or Even?
function oddOrEven(array) {
    return (array.filter(x => Math.abs(x) % 2 === 1).length) % 2 === 1 ? 'odd' : 'even'
}