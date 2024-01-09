// Level 1
// Declare a function fullName and it prints out your full name.
function fullName1 (){
    let firstName = "Goodness"
    let lastName = "Okoro"
    console.log(`Fullname: ${firstName} ${lastName} `)
}
fullName1()

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName (firstName, lastName){
    return `Fullname: ${firstName} ${lastName}`
}
console.log(fullName("Goodness", "Adaeze"))

// Declare a function addNumbers and it takes two parameters and it returns sum.
function addNumbers (num1, num2){
    return `Sum: ${num1 + num2}`
}
console.log(addNumbers(5, 8))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle (length, width){
    return `Area of rectangle: ${length * width}`
}
console.log(areaOfRectangle(6, 7))

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    return `Perimeter of rectangle: ${2*(length + width)}`
}
console.log(perimeterOfRectangle(4, 5))

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    return `Volume of rectangular prism: ${length * width * height}`
}
console.log(volumeOfRectPrism(3, 4, 5))
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle (radius){
    return `Area of circle: ${Math.PI * radius * radius}`
}
console.log(areaOfCircle(5))

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius){
    return `Circumference of circle: ${(2 * Math.PI * radius)}`
}
console.log(circumOfCircle(2))

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    return `Density: ${mass/volume}`
}
console.log(density(6, 3))

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(totalDistance, totalTime){
    return `Speed: ${totalDistance/totalDistance}`
}
console.log(speed(100, 10))

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight (mass, gravity = 9.81){
    return `Weight: ${mass * gravity}`
}
console.log(weight(10))

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsuisTemp){
    return `Fahrenheit: ${(celsuisTemp * 9/5) + 32}`
}
console.log(convertCelsiusToFahrenheit(180))

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calcBmi(weightInKg, height){
    let bmi = (weightInKg/height ** 2).toFixed(1)
    if(bmi < 18.5){
        return `Your BMI is ${bmi}. Underweight`
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        return `Your BMI is ${bmi}, Normal`
    }
    else if(bmi >= 25 && bmi <= 29.9){
        return `Your BMI is ${bmi}. Overweight`
    }
    else{
        return `Your BMI is ${bmi}. Obese`
    }
}
console.log(calcBmi(50, 12))

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
   switch(month.toLowerCase()){
    case "november":
    case "december":
    case "january":
        return `Winter`
    case "february":
    case "march":
    case "april":
        return `Spring`
    case "may":
    case "june":
    case "july":
        return `Summer`
    case "august":
    case "septemer":
    case "october":
        return `Autumn`
    default:
    return `Month is invalid`
   }
   
}
console.log(checkSeason("january"))

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(arg1, arg2, arg3){
    if (arg1 >= arg2 && arg1 >= arg3){
        return `${arg1}`
    }
    else if (arg2 >= arg1 && arg2 >= arg3){
        return `${arg2}`
    }
    else{
        return `${arg3}`
    }
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))
