
const findMatching = (array, string) => {
    return array.filter( results => results.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (array, string) => {
    return array.filter(results =>
        results.toLowerCase().indexOf(string.toLowerCase()) == 0
    )
}

const matchName = (array, string) => {
    return array.filter(result => result.name === string)
}