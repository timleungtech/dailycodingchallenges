//Pillars
function pillars(num_pill, dist, width) {
    return num_pill > 1 ? ((num_pill - 1) * ((100 * dist) + width)) - width : 0
}