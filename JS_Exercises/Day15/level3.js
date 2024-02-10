// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
//In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called 
//Statistics and create all the functions which do statistical calculations as method for the Statistics class.
class Statistics{
    constructor(sample){
        this.sample = sample
    }
    get count(){
        let init = 0
        this.sample.forEach(element => {init++})
        return init
    }
    get sum(){
        let sum = 0
        this.sample.forEach(element => {sum += element})
        return sum
    }
    mean(){
        return this.sum/this.count
    }
    min() {
        let minimum = this.sample[0]; 
        this.sample.forEach((element, index, array) => {
          let second = array[index + 1];
          if (second !== undefined && second < minimum) {
            minimum = second;
          }
        })
        return minimum;
    }
    max(){
        return Math.max(...this.sample)
    }
    range(){
        return this.max() - this.min()
    }
    median(){
        let sortedArray = this.sample.sort((a,b) => a- b)
        let odd = Math.floor(this.count/2)
        let even = Math.floor((this.count/2)+ 1 )

        let median = this.count % 2 === 0 ?(sortedArray[odd] + (sortedArray[even]))/2 : sortedArray[odd]
        return median
    }
    mode(){
        const newSample = {}
        this.sample.forEach((num) => {
            if (newSample[num]){
                newSample[num]++
            }
            else{
                newSample[num] = 1
            }
        })
        const highestFreq = Object.keys(newSample).map(element => ({mode:element, count: newSample[element]}))
        highestFreq.sort((a,b) => b.count - a.count)
        return highestFreq[0]
    }
    variance(){
        let sum = 0
        this.sample.forEach((element => {
        sum += Math.pow((element - this.mean()), 2)
        }))
        return (sum/this.count).toFixed(1)
    }
    standardDeviation(){
        return (Math.pow(this.variance(), 0.5)).toFixed(1)
    }

    freqDist() {
        const freqMap = new Map();
        this.sample.forEach(element => {
            freqMap.set(element, (freqMap.get(element) || 0) + 1);
        });
    
        // Convert the map to the desired format
        const resultArray = Array.from(freqMap.entries()).map(([element, count]) => [count * 4, element]);
    
        return resultArray
    }
}

// const stat = new Statistics()
// stat.sample = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// console.log(stat.freqDist())
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class PersonAccount{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = []
        this.expenses = []
    }
    get totalIncome(){
        let sum = 0
        this.incomes.forEach((element) => {
            sum = sum + element.Amount
        })
        return sum
    }
    get totalExpense(){
        let sum = 0
        this.expenses.forEach((element) => {
            sum = sum + element.Amount
        })
        return sum
    }
    get accountInfo(){
        return `Name: ${this.firstname} ${this.lastname}\nExpenses: ${this.totalExpense}\nIncomes: ${this.totalIncome}\nBalance: ${this.accountBalance()}`
    }
    addIncome(income, description){
        this.incomes.push({"Amount": income, "Description": description})
    }
    addExpense(expense, description){
        this.expenses.push({"Amount": expense, "Description": description})
    }
    accountBalance(){
        return this.totalIncome - this.totalExpense      
    }

}
const newPerson = new PersonAccount("Goodness", "Okoro")
console.log(newPerson.accountInfo)
newPerson.addExpense(5000, "bag")
newPerson.addExpense(500, "bag2")
newPerson.addIncome(15000, "sold phones")
console.log(newPerson.totalExpense)
console.log(newPerson.accountBalance())
console.log(newPerson.accountInfo)
// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome,
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description 
//and expenses is also a set of expenses and its description