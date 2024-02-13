// var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// var names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];
// Explain the difference between forEach, map, filter, and reduce.
console.log("forEach is used to iterate through an array. it takes a callback functon with elements, index parameter and the array itself");
console.log("map is used to iteratea through and modify an array. it takes a callback functon with elements, index and the array itself");
console.log("filter is used to iterate through an array and eliminate elements that satisfy a given condition.");
console.log('reduce takes a callback function with accumulator, current and optional initial value as parameters \n');
// Define a callback function before you use it in forEach, map, filter or reduce.
console.log("A callback function is a function which is passed as a parameter to another function called a higher order function \n");
// Use forEach to console.log each country in the countries array.
countries.forEach(function (country) { return console.log(country); });
console.log("\n");
// Use forEach to console.log each name in the names array.
names.forEach(function (name) { return console.log(name); });
console.log("\n");
// Use forEach to console.log each number in the numbers array.
numbers.forEach(function (num) { return console.log(num); });
console.log("\n");
// Use map to create a new array by changing each country to uppercase in the countries array.
countries.map(function (country) { return console.log(country.toLocaleUpperCase()); });
console.log("\n");
// Use map to create an array of countries length from countries array.
countries.map(function (country) { return console.log(country.length); });
console.log("\n");
// Use map to create a new array by changing each number to square in the numbers array
numbers.map(function (num) { return console.log(Math.pow(num, 2)); });
console.log("\n");
// Use map to change to each name to uppercase in the names array
names.map(function (name) { return console.log(name.toUpperCase()); });
console.log("\n");
// Use map to map the products array to its corresponding prices.
const pro = (products.map(element => {
    const newObj = {}
    newObj[element.product] = element.price
    return newObj
}))
console.log(pro)
// Use filter to filter out countries containing land.
console.log(countries.filter(function (country) { return country.includes("land"); }));
console.log("\n");
// Use filter to filter out countries having six character.
console.log(countries.filter(function (country) { return country.length == 6; }));
console.log("\n");
// Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter(function (country) { return country.length >= 6; }));
console.log("\n");
// Use filter to filter out country start with 'E';
console.log(countries.filter(function (country) { return country[0] == 'E'; }));
console.log("\n");
// Use filter to filter out only prices with values.
console.log(products.filter((i) => typeof(i.price) == 'number' && !isNaN(i.price)))
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array){
   const filtArray = array.filter(element => typeof(element) == 'string')
  return filtArray
}
console.log(getStringLists(["a", "b",9]))
// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce(function (sum, num) { return sum + num; }));
console.log("\n");
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log("".concat(countries.reduce(function (all, each) { return all + "," + each; }, "Estonia"), " are north European countries"));
console.log("\n");
// Explain the difference between some and every
console.log("some checks if some of the elements are similar in one aspect while every checks if all of the elements are similar in one aspect");
console.log("\n");
// Use some to check if some names' length greater than seven in names array
console.log(names.some(function (name) { return name.length > 7; }));
// Use every to check if all the countries contain the word land
console.log(countries.every(function (country) { return country.includes("land"); }));
// Explain the difference between find and findIndex.
console.log("find returns the first element which  satisfies a condition while findIndex returns the index of the first element which satisfies a condition");
console.log("\n");
// Use find to find the first country containing only six letters in the countries array
console.log(countries.find(function (country) { return country.length == 6; }));
// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(function (country) { return country.length == 6; }));
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(function (country) { return country == 'Norway'; }));
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(function (country) { return country == 'Russia'; }));
