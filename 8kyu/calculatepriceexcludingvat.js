//Calculate Price Excluding VAT
function excludingVatPrice(price){
    return typeof price == 'number' ? Math.round((price/1.15)*100) / 100 : -1
}