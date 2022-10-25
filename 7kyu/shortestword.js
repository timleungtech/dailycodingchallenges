//Shortest Word
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length).shift().length
}

function findShort(s){
    s = s.split(' ').sort((a,b) => a.length - b.length)
    return s[0].length
}