//1
const emptyArray = Array()

//2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//3
let arrLength = arr.length
console.log(arrLength)

//4
console.log(arr[0])
console.log(arr[Math.floor((arr.length-1)/2)])
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

for (var i= 0; i <= companies.length-1; i ++){
    if (companies[i].match(/oo+/gi)){
        console.log(companies[i])
    }

}

//15
console.log(companies.sort())
//16
console.log(companies.reverse())
//17
console.log(companies.slice(0, 3))
//18
console.log(companies.slice(companies.length-3, companies.length))
//19
if (companies.length % 2 === 0){
    console.log(companies.slice(Math.floor(companies.length/2)-1, companies.length/2 + 1))

}
else{
    console.log(companies.slice(Math.floor(companies.length/2), (companies.length/2) + 1))
}

//20 
companies.shift()

//21
let middle = Math.floor(companies.length/2)
let removedCompanies = companies.length % 2 == 0 ? companies.splice(middle-1, 2) : companies.splice(middle, 1)
console.log(companies)

// 22
companies.pop()
companies.splice(0, companies.length)
console.log(companies)

// level 2 
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/['|.|,|!|?]/g, "").split(" ")
//2
console.log(words) 
console.log(words.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
let removeAllergic = prompt("Enter the name of commodity to be removed: ")
let removedAllergicToProperCase = (removeAllergic.slice(0, 1)).toUpperCase() + removeAllergic.slice(1,removeAllergic.length)
let indexRemove = shoppingCart.indexOf(removedAllergicToProperCase)
indexRemove == -1 ? console.log("commodity does not exist in array") : shoppingCart.splice(indexRemove, 1 ); console.log(shoppingCart)

let modify = prompt("Enter commodity name to modify: ")
let modifyToProperCase = (modify.slice(0, 1)).toUpperCase() + modify.slice(1,modify.length)
let indexModify = shoppingCart.indexOf(modifyToProperCase)
indexModify == -1 ? console.log("commodity does not exist in array") : shoppingCart[indexModify] = prompt("Enter new commodity name: ")
console.log(shoppingCart)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let minimumAge = ages[0]
let maximumAge = ages[ages.length-1]
console.log(`The minimum age is ${minimumAge} and the maximum age is ${maximumAge}`)

let middleAge = ages.length/2
ages.length % 2 == 0
? console.log(`The median item is ${(ages[Math.floor(middleAge)] + ages[Math.floor(middleAge + 1)])/2}`)
: console.log(`The median item is ${ages.slice(Math.floor(middleAge), Math.floor(middleAge)+ 1)}`)

var total = 0, numberOfStudents = 10, average
for (var i = 0; i<= ages.length-1; i++){
    total = ages[i] + total
}
average = total/numberOfStudents
console.log(`The average is ${average}`)

console.log(`The range is  ${maximumAge - minimumAge}`)

console.log(`Minimum Difference: ${Math.abs(minimumAge - average)}, Maximum Difference: ${Math.abs(maximumAge-average)}`)