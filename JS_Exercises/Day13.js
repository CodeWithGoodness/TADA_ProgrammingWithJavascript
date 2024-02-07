// Display the countries array as a table
// Display the countries object as a table
// Use console.group() to group logs

//Level 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 > 2 * 10 is not correct")
// Write a warning message using console.warn()
console.warn("Do not touch the TS file")
// Write an error message using console.error()
console.error("import statement can only be used in typescript")

// Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
const family = ["Goodness", "Dad", "Jay", "Bb", "Mum", "Others"]

console.time("while loop timer")
let i = 0
while(i < family.length){
    console.log(family[i])
    i++
}
console.timeEnd("while loop timer")

console.time("for loop timer")
for(let i = 0; i < family.length; i++){
    console.log(family[i])
}
console.timeEnd("for loop timer")

console.time("for of loop timer")
for(const i of family){
    console.log(i)
}
console.timeEnd("for of loop timer")

console.time("forEach loop timer")
family.forEach(member => console.log(member))
console.timeEnd("forEach loop timer")

