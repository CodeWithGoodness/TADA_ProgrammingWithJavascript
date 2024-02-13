import countries from "../Day9/countries.mjs"
// How many languages are there in the countries object file.
const numberOfLanguages = (countries) =>{
   const allLanguages = new Set()
   countries.forEach(element => {
      allLanguages.add(...element.languages)
   })
   return allLanguages.size   
}
console.log(numberOfLanguages(countries))

// *** Use the countries data to find the 10 most spoken languages:
const mostSpokenLanguages = (countries, num) => {
   const countryArray = []
   const count = {}
   const arr = []
   countries.forEach(element => {
      countryArray.push(...element.languages)
   })
   countryArray.forEach((element) =>{
      if(count[element]){
         count[element]++
      }
      else{
         count[element] = 1
      }
   })
   const newArray = (Object.keys(count).map((element) => {
      const newObj ={}
      newObj[element] = count[element]
      return newObj
   })).sort((a,b) => Object.values(b) - Object.values(a))      

   for(let i = 0; i < num; i++){
      console.log(newArray[i]) 
   }
}
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))

