// create an empty set
const emptySet = new Set()
console.log(emptySet)

// Create a set containing 0 to 10 using loop
for(let i= 0; i <= 10; i++){
    emptySet.add(i)
}
console.log(emptySet)

// Remove an element from a set
emptySet.delete(7)
console.log(emptySet)

// Clear a set
emptySet.clear()
console.log(emptySet)

// Create a set of 5 string elements from array


// Create a map of countries and number of characters of a country
mapOfCountries = new Map()
for(const i of countries){
    mapOfCountries.set(i, i.length)
}
console.log(mapOfCountries)

