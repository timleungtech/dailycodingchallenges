//Abbreviate a Two Word Name
function abbrevName(name){
    const firstInitial = name[0].toUpperCase()
    const space = name.indexOf(' ')
    const lastInitial = name[space + 1].toUpperCase()
    return (firstInitial + "." + lastInitial)
}