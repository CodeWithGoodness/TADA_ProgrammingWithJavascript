import * as allCountries from "./countries.mjs"
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const products = [
// //   { product: 'banana', price: 3 },
// //   { product: 'mango', price: 6 },
// //   { product: 'potato', price: ' ' },
// //   { product: 'avocado', price: 8 },
// //   { product: 'coffee', price: 10 },
// //   { product: 'tea', price: '' },
// // ]
// // // Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// // const onlyPriceArray = (products.map((prices) => prices.price))
// // const onlyNumbers = (onlyPriceArray.filter((empty) => typeof(empty) == 'number' && !isNaN(empty)))
// // const sum = onlyNumbers.reduce((acc, currentValue) => acc + currentValue,0)
// // console.log(sum)

// // // Find the sum of price of products using only reduce reduce(callback))
// console.log(products.reduce((sum, current) => (sum) + Number(current.price), 0))

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this 
// repository as countries.js(eg 'land', 'ia', 'island','stan')).
function countriesPattern(pattern){
  return Object.keys(allCountries).filter(country => {
    console.log(country)
    //country.name.includes(pattern)
  })
}
console.log(countriesPattern("land"))



// function countriesPattern(pattern) {
//   const filteredCountries = Object.keys(allCountries).filter(countryName => countryName.toLowerCase().includes(pattern.toLowerCase())).reduce((result, countryName) => {
//       result[countryName] = allCountries[countryName];
//       return result;
//     }, {});

//   return filteredCountries;
// }

// console.log(countriesPattern('land'));


// // console.log(countries.filter(function (country) { return country.includes("land"); }));
// // // Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// // // Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// // // Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// // // Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)





