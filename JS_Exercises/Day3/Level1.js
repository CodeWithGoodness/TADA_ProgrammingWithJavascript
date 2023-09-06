let firstName = "Goodness"
let lastName = "Okoro"
let country = "Nigeria"
let city = "Owerri"
let age = 80
let isMarried = false
let year = 2023

console.log(typeof(year))
console.log(typeof(10) == typeof("10"))
console.log(parseInt('9.8'))

//truthy values
let isOn = true
let colour = "pink"
let voters = 45

//falsy values
let currencyValue = 0
let book = ""
let isNigerian = false

console.log(4 > 3)                //true
console.log(4 >= 3)              //true
console.log(4 < 3)              //false
console.log(4 <= 3)            //false
console.log(4 == 4)           //true
console.log(4 === 4)          //true
console.log(4 != 4)          //false
console.log(4 !== 4)        //false
console.log(4 != '4')       //false
console.log(4 == '4')       //true
console.log(4 ==='4')       //false

console.log(("python").length < ("jargon").length)

console.log(4 > 3 && 10 < 12)       //true
console.log(4 > 3 && 10 > 12)       //false
console.log(4 > 3 || 10 < 12)       //true
console.log(4 > 3 || 10 > 12)       //true
console.log(!(4 > 3))               //false
console.log(!(4 < 3))               //true
console.log(!(false))               //true
console.log(!(4 > 3 && 10 < 12))    //false
console.log(!(4 > 3 && 10 > 12))    //true
console.log(!(4 === '4'))           //true
console.log(!(("python").match(/on/gi) && ("dragon").match(/on/gi)))   //false


const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())








