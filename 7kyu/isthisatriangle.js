//Is this a triangle?
function isTriangle(a,b,c){
    let lengths = [a, b, c].sort((a,b) => a-b)
    return (lengths[0] + lengths[1]) > lengths[2]
}