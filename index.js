function findMatching(drivers, string) {
    return drivers.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(element => element[0] === string[0])
}

function matchName(drivers, string) {
    return drivers.filter( element => element.name === string)
}