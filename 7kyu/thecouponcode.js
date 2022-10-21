//The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let currentDate2 = new Date(currentDate)
    let expirationDate2 = new Date(expirationDate)
    return enteredCode === correctCode && currentDate2 <= expirationDate2
}