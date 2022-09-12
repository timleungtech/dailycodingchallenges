//Tip Calculator
function calculateTip(amount, rating) {
    rating = rating.toLowerCase()
    return  rating === 'excellent'  ? Math.ceil(amount * .2 ) : 
            rating === 'great'      ? Math.ceil(amount * .15) : 
            rating === 'good'       ? Math.ceil(amount * .1 ) : 
            rating === 'poor'       ? Math.ceil(amount * .05) : 
            rating === 'terrible'   ?                     0   : 'Rating not recognised'
}