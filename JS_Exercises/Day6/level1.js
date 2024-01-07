//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10 ; i ++){
    console.log(i)
}

let j = 0
while(j <= 10){
    console.log(j)
    j++
}


let k = 0
do{
    console.log(k)
    k++
}
while(k <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let l = 10; l >= 0 ; l--){
    console.log(l)
}

let m = 10
while(m >= 0){
    console.log(m)
    m--
}


let n = 10
do{
    console.log(n)
    n--
}
while(n >= 0)

//Iterate 0 to n using for loop
let userInput = parseInt(prompt("Enter a number: "))
for(let num = 0; num <= userInput ; num++){
    console.log(num)
}


let lengthOfTree = parseInt(prompt("What is the tree length?: "))
for (let tree = 1; tree <= lengthOfTree; tree++) {
    console.log(`${"#".repeat(tree)}\n`)
}

let end = parseInt(prompt("Enter the ending number of the multiplication:  "))
for(let calc = 0; calc <= end; calc++ ){
    console.log(`${calc} x ${calc} = ${calc ** 2}`)
}

//Using loop print the following pattern
console.log(`i\ti^2\ti^3`)
for(let a = 0; a <= 10; a++){
    console.log(`${a}\t${a**2}\t${a**3}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
    else{
        continue
    }
}


// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i)
    }
    else{
        continue
    }
}
// Use for loop to iterate from 0 to 100 and print only prime numbers
for(let p = 2; p <= 100; p++){
    let flag = 0
    for(let h =2; h < p; h++){
        if(p % h == 0){
            flag = 1
            break
        }
    }
    if (flag == 0){
        console.log(p)
    }
}
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let init = 1; init <= 100; init++){
    sum += init
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let SumOfEven = 0, SumOfOdd = 0
const newArray = []
for(let y = 1; y <= 100; y++){
        if(y % 2 == 0){
            SumOfEven  += y
        }
        else{
            SumOfOdd += y
        }
}
newArray.push(SumOfEven, SumOfOdd)
console.log(`The sum of all evens from 0 to 100 is ${SumOfEven}. And the sum of all odds from 0 to 100 is ${SumOfOdd}.`)
console.log(newArray)

// Develop a small script which generate array of 5 random numbers
const randArray = []
for(let rand = 1; rand <= 5; rand ++){
    let generatedNum = Math.floor(Math.random()* 100)
    randArray.push(generatedNum)
}
console.log(randArray)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueArray = []
for(let number = 1; number <= 5; number ++){
    let generateNum = Math.floor(Math.random()* 100)
    if (uniqueArray.includes(generateNum)){
        continue
    }
    else{
        uniqueArray.push(generateNum)
    }
}
console.log(uniqueArray)
// Develop a small script which generate a six characters random id:
let characters = 'abcdefghijklmnopqrstuvwxyz1234567890', randomId = ""
for(let randChar = 1; randChar <= 6; randChar ++){
    randomId = (characters[Math.floor(Math.random() * 36)]) + randomId
}
console.log(randomId)

