var love = "Love is the best thing in this world. Some found their love and some are\
still looking for their love"
console.log((love.match(/love/gi)).length)
 
var sentence = "You cannot end a sentence with because because because is a conjunction"
console.log((sentence. match(/because/gi)).length)

const clean = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.\
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;\
I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?\
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(clean.replace(/[!@#%&$]/g, ""))

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// const regex = /[@|#|$|%|&|?|!|;]/g;
// console.log(sentence.replace(regex, ''))



income = "He earns 5000 euro from salary per month, 10000 euro annual bonus,\
 15000 euro online courses per month" 
console.log(Number(income.match(/\d+/g)[0]) * 12 + Number(income.match(/\d+/g)[1]) + Number(income.match(/\d+/g)[2])* 12)


// const str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// const regex = /\d+(?= euro)/gi;
// let array = str.match(regex)
// let sum = 0
// for (const element of array){
//     sum += parseInt(element)
// }
// console.log(sum)