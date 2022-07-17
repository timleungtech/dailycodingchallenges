//The Feast of Many Beasts
function feast(beast, dish) {
    let beastArr = beast.split('')
    let dishArr = dish.split('')
    return (beast.charAt(0) === dish.charAt(0) && beast.charAt(beastArr.length - 1) === dish.charAt(dishArr.length - 1))
}