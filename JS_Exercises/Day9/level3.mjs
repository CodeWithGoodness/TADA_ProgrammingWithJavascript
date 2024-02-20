import countries from "./countries.mjs";
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
console.log(countries.map(country => ({Country:country.name, capital: country.capital, population: country.population})))
// *** Find the 10 most spoken languages:
function mostSpokenLanguages(countries, num){
  const arr = []
  const languagesArray = []
  const count = {}
  countries.forEach(element => {
    languagesArray.push(...element.languages)
  })
  languagesArray.forEach((element) => {
    if(count[element]){
      count[element]++
    }  
    else{
      count[element] = 1
    }
  }
  )
  const result = (Object.keys(count).map((element) => {
    const newObj = {}
    newObj[element]= count[element]
    return newObj
  }
  )).sort((a,b) => Object.values(b) - Object.values(a))

  for(let i = 0; i < num; i++){
    arr.push(result[i]) 
 }
  return arr   
}

console.log(mostSpokenLanguages(countries, 10))

// *** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countries, num){
  const arr = []
  const populationArray = (countries.map(country => ({Country: country.name, Population: country.population}))).sort((a,b) => b.Population - a.Population)
  for(let i = 0; i < num; i++){
    arr.push(populationArray[i]) 
 }
 return arr
}
console.log(mostPopulatedCountries(countries, 3))


// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure 
//of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, 
//and frequency distribution of the sample. You can create an object called statistics and create all the functions which do 
//statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
  count(ages){
    let sum = 0
    ages.forEach((age) =>{
      sum++
    })
    return sum
  },
  sum(ages){
    return(ages.reduce((sum, age) => sum + age, 0))
  },
  min(ages){
    return ages.sort((a, b) => a - b)[0]
  },
  max(ages){
    return ages.sort((a, b) => b - a)[0]
  },
  range(){
    return this.max(ages) - this.min(ages)
  },
  mean(){
    return this.sum(ages)/this.count(ages)
  }
}
console.log('Count:', statistics.count(ages)) // 25
console.log('Sum: ', statistics.sum(ages)) // 744
console.log('Min: ', statistics.min(ages)) // 24
console.log('Max: ', statistics.max(ages)) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

