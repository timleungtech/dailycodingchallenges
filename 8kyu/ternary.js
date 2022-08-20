//Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    return n >= 10          ? 90 * n : 
           n >= 5 && n < 10 ? 95 * n :
           n < 5            ? 100 * n : 0
}