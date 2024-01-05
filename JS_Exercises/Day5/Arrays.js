//1
const emptyArray = Array()

//2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//3
let arrLength = arr.length
console.log(arrLength)

//4
console.log(arr[0])
console.log(arr[parseInt((arr.length-1)/2)])
console.log(arr[arr.length-1])

//5
const mixedDataTypes = [true, 1, "girl", "son", {fruits: ['apple', 'banana']}, {colours: 'Red', car: 'volvo'}]
//6
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log(companies)
//8
console.log(companies.length)
//9
console.log(companies[0])
console.log(companies[(companies.length-1)/2])
console.log(companies[companies.length-1])
//10
console.log(companies.join(", "))
//11
console.log((companies.join(", ")).toUpperCase())
//12
console.log(`${companies.slice(0, companies.length-1).join(", ")} and ${companies[companies.length-1]} are big IT companies`)
//13
let searchCompany = (prompt("Enter company name: ")).toLowerCase()
if (companies.includes(searchCompany)){
    console.log(`${searchCompany.charAt(0).toUpperCase()  + searchCompany.slice(1, searchCompany.length)} exists in this array`)
}
else{
    console.log(`${searchCompany.charAt(0).toUpperCase() + searchCompany.slice(1, searchCompany.length)} is not found`)
}

//14

if (compa)