// Create a closure which has one inner function
function greeting(){
    let name = "Goodness"
    function morning(){
        return `goodmorning ${name}`
    }
    return morning
}
const greet = greeting()
console.log(greet())

// Exercises: Level 2
// Create a closure which has three inner functions
function calculate(){
    let num = 0
    function increment(){
        num++
        return num
    }
    function decrement(){
        num--
        return num
    }
    function multiply(){
        num*=2
        return num
    }
    return {
        increment:increment,
        decrement: decrement,
        multiply:multiply
    }
}
const calc = calculate()
console.log(calc.increment())
console.log(calc.increment())
console.log(calc.increment())

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense,
// accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

//done before
