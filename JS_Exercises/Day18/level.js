const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const lang = element.languages.map(language => language.name).join(",")
           console.log(`Country Name:${element.name}\nCapital: ${element.capital}\nLanguages: ${lang}\nPopulation: ${element.population}\nArea: ${element.area}\n`) 
        })
    })
    .catch(error => console.log(error))

// Exercises: Level 2
// Print out all the cat names in to catNames variable.
const catNames = fetch(catsAPI)
    .then(response => response.json())
    .then(data => {data.forEach(cat => console.log(cat.name))})
    .catch(error => console.log(error))

console.log(catNames)

// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.
const weight = fetch(catsAPI)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        const metrics = data.map(cat => cat.weight.metric)
        console.log(metrics)
    })
    .catch(error => console.log(error))
console.log(weight)
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

    