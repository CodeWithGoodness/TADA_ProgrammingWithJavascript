var x = prompt("Enter the value of x: ")
var z = x**2 + 6*x + 9
console.log(z)


//solving quadratic equation
var a = Number(prompt("Enter the value of a: "))
var b = Number(prompt("Enter the value of b: "))
var c = Number(prompt("Enter the value of c: "))
var z1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/(2*a) 
var z2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/(2*a)
console.log(`The value of z is ${z1} or ${z2} `)

