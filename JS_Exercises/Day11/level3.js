// Destructure the countries object print name, capital, population and languages of all countries
// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, 
//skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [fname, skills,score] = student1
let [first, second,third, fourth] = score
const jsScore = [first, second]
const reactScore = [third, fourth]
console.log(fname, skills, reactScore.toString())

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject (students){
    const result = []
    students.forEach(element => {
        let [fname, skills,score] = element
        result.push({fname,skills,score})
    })
    return result
}
console.log(convertArrayToObject(students))

const student = {
    name: 'David',
    age: 25,
    skills: {
    frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
    ],
    backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
        { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
    }
}

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const newStudent = {...student}
// Add Bootstrap with level 8 to the front end skill sets
newStudent.skills.frontEnd.push({skill:"Bootstrap",level: 8})
// Add Express with level 9 to the back end skill sets
newStudent.skills.backEnd.push({skill:"Express",level: 9})
// Add SQL with level 8 to the data base skill sets
newStudent.skills.dataBase.push({skill:"SQL",level: 8})
// Add SQL without level to the data science skill sets
newStudent.skills.dataScience.push("SQL")
console.log(newStudent.skills)
