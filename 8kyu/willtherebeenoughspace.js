//Will there be enough space?
function enough(cap, on, wait) {
    return cap >= on + wait ? 0 : on + wait - cap
}