//let number = prompt('Enter number', 'number goes here')
//console.log(number)

// function consoleLog(val){
//     console.log(val)
//     return val
// }

// consoleLog("Hello")

// function doubleIt(num){
//     return num*2
// }

// function objectMaker(val){
//     return{
//         prop:val
//     }

// }

// objectMaker(20)
// doubleIt(10).toString()

// console.log(objectMaker(doubleIt(100)))

let counter = 3
function example(){
    console.log(counter)
    counter = counter- 1
   if (counter === 0 ) return;
    example()
}
example()