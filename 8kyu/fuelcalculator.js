//Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
    let price = litres >= 10 ? litres * (pricePerLitre - .25) :
                litres >= 8 ? litres * (pricePerLitre - .2)   :
                litres >= 6 ? litres * (pricePerLitre - .15)  :
                litres >= 4 ? litres * (pricePerLitre - .1)   :
                litres >= 2 ? litres * (pricePerLitre - .05)  :
                pricePerLitre * litres
    return Number(price.toFixed(2))
}