
// Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
function greatestNumberOfSkills (users){
    let maxSkills = 0
    let personWithMaxSkills = ""
    for(person in users){
        if (users[person].skills.length > maxSkills){
            maxSkills = users[person].skills.length
            personWithMaxSkills = person
        }
        else{
            continue
        }
    }
    return personWithMaxSkills
}
console.log(greatestNumberOfSkills(users))

// Count logged in users, count users having greater than or equal to 50 points from the following object.
function loggedInUsers(users){
    let numberOfLoggeddInUsers = 0
    for(person in users){
        if (users[person].isLoggedIn == true){
            numberOfLoggeddInUsers += 1
        }
        else{
            continue
        }
    }
    return numberOfLoggeddInUsers
}
console.log(loggedInUsers(users))

function greaterThanOrEqualTo50(users){
    let num = 0
    for(person in users){
        if(users[person].points >= 50){
            num += 1
        }
        else{
            continue
        }
    }
    return num
}
console.log(greaterThanOrEqualTo50(users))

// Find people who are MERN stack developer from the users object
function mernStackDevelopers(users){
    const dev = []
    for(person in users){
    if(users[person].skills.includes( 'MongoDB', 'Express', 'React', 'Node')){
            dev.push(person)
        }
        else{
            continue
        }
    }
    return dev.toString()
}
console.log(mernStackDevelopers(users))

// Set your name in the users object without modifying the original users object
users.Goodness = {}
users.Goodness.email = "goodnessadaeze@outlook.com"
users.Goodness.skills = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
users.Goodness.age = 22,
users.Goodness.isLoggedIn = true,
users.Goodness.points = 60

// Get all keys or properties of users object
console.log(Object.keys(users))

// Get all the values of users object
console.log(Object.values(users))

// Use the countries object to print a country name, capital, populations and languages.