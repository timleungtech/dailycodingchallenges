//Two to One
function longest(s1, s2) {
    let str = s1 + s2
    str = str.split('').sort()
    return [...new Set(str)].join('')
}