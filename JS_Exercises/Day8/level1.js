// Create an empty object called dog
const dog = {}
// Print the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Hill Billy"
dog.legs = 4
dog.color = "white"
dog.age = 6
dog.bark = function() {
    return `woof woof`
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
// Set new properties the dog object: breed, getDogInfo
dog.breed = "German"
dog.getDogInfo = function(){
    return `Name: ${this.name}\nNumber of legs: ${this.legs}\nColor: ${this.color}\nAge: ${this.age}\nBreed: ${this.breed}`
}
console.log(dog.getDogInfo())