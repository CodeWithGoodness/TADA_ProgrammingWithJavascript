const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const A = new Set(a)
const B = new Set(b)
const c = [...a,...b]
const C = new Set(c)
console.log(C)

// Find a intersection b
const intersection = a.filter((common) => B.has(common))
console.log(intersection)

// Find a with b
const difference = a.filter((common) => !B.has(common))
console.log(difference)



