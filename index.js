// Code your solution here
const findMatching = (source, sought) => {
  return source.filter(possibleMatch =>
    possibleMatch.toLowerCase() === sought.toLowerCase())
}

const fuzzyMatch = (source, sought) => {
  return source.filter(possibleMatch =>
    possibleMatch[0].toLowerCase() === sought[0].toLowerCase())
}

const matchName = (source, sought) => {
  return source.filter(possibleMatch =>
    possibleMatch.name === sought)
}

// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match
// matchName()
// 7) accesses the data structure to check if name matches