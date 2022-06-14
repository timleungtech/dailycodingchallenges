//Transportation on vacation
function rentalCarCost(d) {
    let cost = 40 * d
    return (d >= 7) ? cost - 50 : (d >= 3) ? cost - 20 : cost
}