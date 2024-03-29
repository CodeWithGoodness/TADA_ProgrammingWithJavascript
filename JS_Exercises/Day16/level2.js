const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Change skills array to JSON using JSON.stringify()
console.log(JSON.stringify(skills))
// Stringify the age variable
console.log(JSON.stringify(age))
// Stringify the isMarried variable
console.log(JSON.stringify(isMarried))
// Stringify the student object
console.log(JSON.stringify(student, undefined, 4))

// Level 2
// Stringify the students object with only firstName, lastName and skills properties
console.log(JSON.stringify(student, ["firstName", "lastName", "skills"], 2))

//Level 3
// Parse the txt JSON to object.
const txtToObject = JSON.parse(txt)
// Find the user who has many skills from the variable stored in txt.
// function manySkills(txtToObject){
//     const txtMap = new Map()
//     Object.entries(txtToObject).forEach(([element, index]) => {
//         txtMap.set(element, index.skills.length)  
//     });
//     return txtMap
// }
function manySkills(txtToObject){
   const txtMap = Object.keys(txtToObject).map((element) => ({
        name: element,
        count:txtToObject[element].skills.length
    }))
    return txtMap.sort((a,b) => b.count - a.count)
}
console.log(manySkills(txtToObject))
