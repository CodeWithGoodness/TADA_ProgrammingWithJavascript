// // Develop a small script which generate any number of characters random id:
// let characters = 'abcdefghijklmnopqrstuvwxyz1234567890', randomId = "", numberOfCharacters = parseInt(prompt("Enter number of characters: "))
// for(let randChar = 1; randChar <= numberOfCharacters; randChar ++){
//     randomId = (characters[Math.floor(Math.random() * 36)]) + randomId
// }
// console.log(randomId)

// // Write a script which generates a random hexadecimal number
// let length = parseInt(prompt("Enter the length of the hexadecimal")), randomHexadecimal = ""
// for(let i = 1; i <= length; i++){
//     randomHexadecimal += Math.floor(Math.random() * 16).toString(16) // Converts the random number to hexadecimal and ensures it's in uppercase
// }
// console.log('Random Hexadecimal:', randomHexadecimal);

// Write a script which generates a random rgb color number.
let rgb =""
for (let j = 1; j <= 3 ; j++){
    rgb = rgb + Math.floor(Math.random() * 255) + ","
}
console.log(`rgb(${rgb})`)

// Using the countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
// const newCountries = []
// for(j = 0; j <= countries.length-1; j++){
//     newCountries.push(countries[j].toUpperCase())
// }
// console.log(newCountries)

// // Using the above countries array, create an array for countries length'.
// const lengthOfCountries = []
// for (let j = 0; j <= countries.length-1; j++){
//     lengthOfCountries.push(countries[j].length)
// }
// console.log(lengthOfCountries)

// Use the countries array to create the following array of arrays:
// const arrayOfArray =  []
// for (let j = 0; j < countries.length; j++){
//     const array = [countries[j], countries[j].slice(0,3).toUpperCase(), countries[j].length]
//     arrayOfArray.push(array)
// }
// console.log(arrayOfArray)

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', 
//print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const includesLand =[]
let flag = 0
for(let i = 0; i < countries.length; i ++){
    if (countries[i].includes("land")){
        includesLand.push(countries[i])
        flag = 1
    }
    else{
        continue
    }
}
flag == 1
? console.log(includesLand)
: console.log("All these countries are without land")


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with,
// print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const includesIa =[]
let bool = 0
for(let i = 0; i < countries.length; i ++){
    if (countries[i].includes("ia")){
        includesLand.push(countries[i])
        bool = 1
    }
    else{
        continue
    }
}
bool == 1
? console.log(includesIa)
: console.log("All these countries are without ia")
// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB