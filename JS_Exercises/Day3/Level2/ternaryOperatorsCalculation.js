var hours = parseInt(prompt("Enter the number of hours: "))
var ratePerHour = parseFloat(prompt("Enter the rate per hour: "))
console.log (`Your weekly earning is ${hours * ratePerHour}`)



var name = prompt("What is your name?: ")
name.length > 5
    ? console.log ("Your name is long")
    : console.log("Your name is short")


let firstName = prompt("Enter your first name: ")
let lastName = prompt("Enter your last name: ")
firstName.length > lastName.length
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your first name, ${lastName} is longer than your family name, ${firstName}`)




let myAge = parseInt(prompt("My age: "))
let yourAge = parseInt(prompt("Your age: "))
myAge > yourAge
    ? console.log(`I am ${myAge - yourAge} years older than you`)
    : console.log(`You are ${yourAge - myAge} years older than me`)

let birthYear = parseInt(prompt("Enter birth year: "))
birthYear > 18
    ? console.log(`You are ${birthYear}. You are old enough to drive `)
    : console.log(`You are ${birthYear}. You will be allowed to drive after ${18- birthYear} years.`)
    
