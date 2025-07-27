//Automorphic Number (Special Numbers Series #6)
function automorphic(n){
    return n.toString() == (n**2).toString().slice(-n.toString().length) ? 'Automorphic' : 'Not!!'
}