console.log("hi")

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


const persons = [{
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
]

let bobby = drivers[0]
let bob = "Bob"

const findMatching = (drivers,string) => {

   return  drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())

}

const fuzzyMatch = (drivers, str) => {

    return drivers.filter(driver =>
        driver.toLowerCase().indexOf(str.toLowerCase()) === 0)
}


const matchName = (persons, string) => {
    return persons.filter(person => person.name === string);
}
  

console.log(findMatching(drivers,bobby))
console.log(fuzzyMatch(drivers,bob))
console.log(matchName(drivers,bobby))