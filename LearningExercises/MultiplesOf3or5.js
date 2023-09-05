// var sumOfMultiple = 0
// function sum (num){
//     for(var i = num;  i >= 3; i--){
//         if(i % 3 == 0 || i % 5 == 0){
//             console.log(i)
//             sumOfMultiple += i
//         }

//     }
//     return sumOfMultiple
// }

// console.log(sum(50))



var newString = ""
var first, second
function toCamelCase(str){
  for(var i = 0; i < str.length; i++){
    console.log(str.length)
    if (str[i] == "_"){
      newString = str.replace("_"," ")
    }
  }
  return newString
}
console.log(toCamelCase("hello_women_world"))