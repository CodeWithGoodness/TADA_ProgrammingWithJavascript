// // Store you first name, last name, age, country, city in your browser localStorage.
let firstName = "Goodness"
let lastName = "Okoro"
let age = 10
let country = "USA"
let city = "NYC"
localStorage.setItem("firstname", firstName)
localStorage.setItem("Lastname", lastName)
localStorage.setItem("age", age)
localStorage.setItem("country", country)
localStorage.setItem("City", city)

// // Level 2
// // Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.
// //Store the student object in your browser localStorage.
const student = {
    firstname:"Goodness",
    lastName : "Okoro",
    age : 10,
    skills: ["HTML", "CSS", "Java", "Python", "JavaScript"],
    country : "USA",
}

const StringifyObject = JSON.stringify(student, undefined, 2)
localStorage.setItem("student", StringifyObject)
console.log(localStorage)

// // Exercises: Level 3
// // Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance
// //methods.Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const PersonAccount = {
    firstname : "Goodness",
    lastname : "Okoro",
    incomes : [
        {Amount:5000, Description: "bag"},
        {Amount:12000, Description:"shoe"},
        {Amount:20000, Description:"cloth"}
    ],
    expenses : [
        {Amount:10000, Description:"Rent"},
        {Amount:2000, Description:"upkeep"}
    ],
  
    totalIncome(){
        let sum = 0
        this.incomes.forEach((element) => {
            sum = sum + element.Amount
        })
        return sum
    },
    totalExpense(){
        let sum = 0
        this.expenses.forEach((element) => {
            sum = sum + element.Amount
        })
        return sum
    },
    accountInfo(){
        return `Name: ${this.firstname} ${this.lastname}\nExpenses: ${this.totalExpense()}\nIncomes: ${this.totalIncome()}\nBalance: ${this.accountBalance()}`
    },
    addIncome(income, description){
        this.incomes.push({"Amount": income, "Description": description})
    },
    addExpense(expense, description){
        this.expenses.push({"Amount": expense, "Description": description})
    },
    accountBalance(){
        return this.totalIncome() - this.totalExpense()   
    }

}
console.log(PersonAccount.accountInfo())