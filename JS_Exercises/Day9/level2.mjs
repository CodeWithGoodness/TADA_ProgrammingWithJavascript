import * as allCountries from "./countries.mjs"
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const onlyPriceArray = (products.map((prices) => prices.price))
const onlyNumbers = (onlyPriceArray.filter((empty) => typeof(empty) == 'number' && !isNaN(empty)))
const sum = onlyNumbers.reduce((acc, currentValue) => acc + currentValue,0)
console.log(sum)

// Find the sum of price of products using only reduce reduce(callback))
console.log(products.reduce((sum, current) => (sum) + Number(current.price), 0))

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this 
// repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern){
 return allCountries.default.filter(country => {
    return country.name.toLowerCase().includes(pattern.toLowerCase())
  })
}
console.log(categorizeCountries("stan"))

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function frequency(){
  const arrayCountries = allCountries.default
  const uniqueLetters = new Set()
  const count = {}
  
  arrayCountries.forEach(country =>{
    const firstLetter = country.name[0].toLowerCase()
    uniqueLetters.add(firstLetter)
    count[firstLetter] = (count[firstLetter] || 0) + 1
  })
  const result = Array.from(uniqueLetters).map(element => {
    const newObj = {}
    newObj[element] = count[element]
    return newObj
  })
  return result
}
console.log(frequency())




// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(){
  const arrayCountries = allCountries.default
  const firstTenArray = []
  const result = arrayCountries.forEach((element, index) => {
   if(index < 10){
    firstTenArray.push(element.name) 
   }
  })
  return firstTenArray.join(",")
}
console.log(getFirstTenCountries())
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(){
  const arrayCountries = allCountries.default.reverse()
  const lastTenArray = []
  const result = arrayCountries.forEach((element, index) => {
   if(index < 10){
    lastTenArray.push(element.name) 
   }
  })
  return lastTenArray.join(",")
}
console.log(getLastTenCountries())
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function mostFrequent(){
  const arrayCountries = allCountries.default
  const uniqueLetters = new Set()
  const count = {}
  
  arrayCountries.forEach(country =>{
    const firstLetter = country.name[0].toLowerCase()
    uniqueLetters.add(firstLetter)
    count[firstLetter] = (count[firstLetter] || 0) + 1
  })
  const result = Array.from(uniqueLetters).map(element => {
    const newObj = {}
    newObj[element] = count[element]
    return newObj
  }).sort((a,b) => b.count > a.count)
  return result[0]
}
console.log(mostFrequent())




