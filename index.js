// Code your solution here
console.log("hi")

let drivers = ["alex", "james", "alex", "jim"]
let name = "alex"

const findMatching = (drivers, name) => {
  return drivers.filter(el => {
     return el.toLowerCase() == name.toLowerCase()
  })
}

const fuzzyMatch = (drivers, name) =>{
  return drivers.filter(el => {
    return el.charAt(0) == name.charAt(0)
  })
}

const matchName = (drivers, name) => {
  return drivers.filter(el => {
    return el.name == name
  })
}

console.log(findMatching(drivers, name))