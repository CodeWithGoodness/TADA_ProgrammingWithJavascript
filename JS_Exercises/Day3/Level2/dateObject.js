let numberOfYears = parseInt(prompt("Enter number of years you live: "))
let secondsInAYear = 
console.log(`You lived ${ numberOfYears * 365 *24 * 60 *60}`)



const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1 > 9 ? `${now.getMonth() + 1 }`: `0${now.getMonth() + 1}`
const day = now.getDate() > 9 ? `${now.getDate()}` : `0${now.getDate()}`
const hour = now.getHours() > 9 ? `${now.getHours()}` : `0${now.getHours()}`
const minutes = now.getMinutes() > 9 ? `${now.getMinutes()}` : `0${now.getMinutes()}`
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)
console.log(`${day}-${month}-${year} ${hour}:${minutes}`)
console.log(`${day}/${month}/${year} ${hour}: ${minutes}`)

