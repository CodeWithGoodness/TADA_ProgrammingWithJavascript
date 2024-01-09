// Exercises: Level 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation (a, b, c, x, y){
    return `${a*x + b*y + c}`
    
}
console.log(solveLinEquation(1,2,3,4,5))

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c){
    let answer = `${Math.floor((-b+Math.sqrt(Math.pow(b,2) - 4 * a * c))/ 2*a)} or ${Math.floor((-b-Math.sqrt(Math.pow(b,2) - 4 * a * c))/ 2*a)}`
    return answer
}
console.log(solveQuadratic(34,67,8))
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = arr => {
    for(const element of arr){
        console.log(element)
    }
}
const fruits = ["Mango", "apple", "Banana", "Paw-paw"]
printArray(fruits)

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() +1
    const day = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    return `${day}/${month}/${year} ${hours}:${minutes}` 
}
console.log(showDateTime())

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues (x, y){
    let tempValue = y
    y = x
    x = tempValue
    return `x: ${x}, y: ${y}`
}
console.log(swapValues(5,6))
console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5)) // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    const newArrayy = []
    for(let i = 0; i < arr.length; i++){
        newArrayy.unshift(arr[i])
    }
    return newArrayy
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr){
    const capitalizedarray = []
    for(let i = 0; i < arr.length; i++){
        capitalizedarray.push(arr[i].toUpperCase())
    }
    return capitalizedarray
}
console.log(capitalizeArray(["boy", "girl", "child"]))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(array, arrayItem){
    array.push(arrayItem)
    return array
}
console.log(addItem([4,5,7,9,], 89))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(array, itemIndex){
    for(let i = 0; i < array.length; i++){
        if (itemIndex == i){
            array.splice(i, 1)
        }
    }
    return array
}
const numArray = [4,5,7,9,]
console.log(removeItem(numArray, 3))

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num1, num2){
    let sum = 0
    for(let i= num1; i <= num2; i++){
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(0, 10))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num1, num2){
    let sumOfOddNumbers = 0
    for(let i= num1; i <= num2; i++){
        if (i % 2 != 0){
            sumOfOddNumbers += i
        }
    }
    return sumOfOddNumbers
}
console.log(sumOfOdds(0, 10))
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num1, num2){
    let sumOfEvenNumbers = 0
    for(let i= num1; i <= num2; i++){
        if (i % 2 == 0){
            sumOfEvenNumbers += i
        }
    }
    return sumOfEvenNumbers
}
console.log(sumOfEven(0, 10))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number){
    let evenCount = 0, oddCount = 0
    for(let i = 0; i <= number; i++){
        if(i % 2 == 0){
            evenCount +=1
        }
        else{
            oddCount += 1
        }
    }
    return `The number of odds are ${oddCount}\nThe number of evens are ${evenCount} `
}
console.log(evensAndOdds(100))

// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Write a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE






