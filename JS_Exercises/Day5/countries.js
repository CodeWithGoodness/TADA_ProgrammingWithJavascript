const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]
let search = prompt("Search for a country")
let searchToProperCase = (search.slice(0, 1).toUpperCase()) + search.slice(1, search.length)
countries.includes(searchToProperCase)
? console.log(search.toUpperCase())
: console.log(`${countries[countries.push(searchToProperCase)-1].toUpperCase()} has been added`)

console.log(countries.slice(0, 10))   //Slice the first ten countries from the countries array


middle = countries.length/2
countries.length % 2 === 0
    ? console.log(countries.slice(Math.floor(middle-1), middle + 1))
    : console.log(countries.slice(Math.floor(middle), middle + 1))




middle = countries.length/2     // Find the middle country(ies) in the countries array
if(countries.length % 2 == 0){
   console.log(`First Array: ${countries.slice(0, middle-1)} Second Array: ${countries.slice(middle, countries.length)}`)
}
else{
    // let firstArray = countries.slice(0, middle)
    // let secondArray = countries.slice(middle, countries.length)
    console.log(`First Array: ${countries.slice(0, middle)} \nSecond Array: ${countries.slice(middle + 1, countries.length)}`)
}
    