// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro 
//online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let salaryText = text.match(/\d+.euro from salary per month/g)
let bonusText = text.match(/\d+.euro annual bonus/g)
let coursesText = text.match(/\d+. euro online courses per month/g)

let salary = Number(salaryText.toString().match(/\d+/g)) * 12
let bonus = Number(bonusText.toString().match(/\d+/g))
let courses = Number(coursesText.toString().match(/\d+/g)) * 12
let totalIncome = salary + bonus + courses
console.log(totalIncome)

// The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.
//Extract these numbers and find the distance between the two furthest particles.
let sentence = `The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`
let points = sentence.match(/-?\d+/g)
let sortedPoints = points.sort(function(a, b) {
    return a - b;
  })
let distance = sortedPoints[sortedPoints.length-1] - sortedPoints[0]
console.log(distance)

// Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable (variableName){
  let doesNotStartWithDigit = /^[\D]/.test(variableName)
  let noSpecialCharacters = /^[A-Za-z\d$_]*$/.test(variableName)
  let noSpace = /\S/.test(variableName)
  const isValid = doesNotStartWithDigit && noSpecialCharacters && noSpace
  console.log(isValid)
  
}
//Test cases
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True


