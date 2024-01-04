let score = Number(prompt("Enter your Score: "))
switch(true){
    case score >= 80 &&  score <= 100:
        console.log(`A`)
        break
    case score >= 70 && score <= 89:
        console.log(`B`)
        break
    case score >=60 && score <= 69:
        console.log(`C`)
        break
    case score >=50 && score <= 59:
        console.log(`D`)
        break
    case score >=0 && score <= 49:
        console.log(`F`)
        break
    default:
        console.log(`Enter a valid score`)
        
}

var month = (prompt("Enter the month of the year: ")).toLowerCase()
switch(month){
    case "january":
    case "february":
    case "december":
        console.log("winter is here!")
        break
    case "march":
    case "april":
    case "may":
        console.log("Spring is here!")
        break
    case "june":
    case "july":
    case "august":
        console.log("Summer is here!")
        break
    case "september":
    case "october":
    case "november":
        console.log("Autumn is here!")
        break
    default:
        console.log("Month of the year is invalid")
}

let day = (prompt("What is the day today? ").toLowerCase())
switch(day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case " thursday":
    case "friday":
        console.log(`${(day.charAt(0).toUpperCase()) + (day.substring(1, day.length))} is a working day.`)
        break
    case "saturday":
    case "sunday":
        console.log(`${(day.charAt(0).toUpperCase()) + (day.substring(1, day.length))} is a weekend`)
        break
    default:
        console.log("Day is invalid")
}

 

let month = (prompt("Enter the month of the year: ")).toLowerCase()
switch (month){
    case "september":
    case "april":
    case "june":
    case "november":
        console.log(`${(month.charAt(0).toUpperCase()) + month.substring(1, month.length)} has 30 days`)
        break
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${(month.charAt(0).toUpperCase()) + month.substring(1, (month.length))} has 31 days`)
        break
    case "february":
        var leapYear = parseInt(prompt(`is this a leap year? Enter "1" for yes and "0" for no`))
        if (leapYear == 1){
            console.log(`${(month.charAt(0).toUpperCase()) + month.substring(1, (month.length))} has 29 days`)
        }
        else{
            console.log(`${(month.charAt(0).toUpperCase()) + month.substring(1, (month.length))} has 28 days`)
        }
        break
    default:
        console.log("Month is invalid")
} 

