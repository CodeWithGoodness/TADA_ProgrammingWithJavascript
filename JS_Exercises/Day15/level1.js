// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor (name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getName(){
        return this.name
    }
    get getAge (){
        return this.age
    }
    get getColor(){
        return this.color
    }
    get getLegs(){
        return this.legs
    }
    set setName(name){
        this.name = name
    }
    set setAge (age){
        this.age = age
    }
    set setColor(color){
        this.color = color
    }
    set setLegs(legs){
        this.legs = legs
    }
    getAllDetails(){
        return `Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nNumber of legs: ${this.legs}`
    }
}
// Level 2 Create a Dog and Cat child class from the Animal Class. Override the method you create in Animal class
class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.sound = "barks"
    }
}
class Cat extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.sound = "meows"
    }
}
