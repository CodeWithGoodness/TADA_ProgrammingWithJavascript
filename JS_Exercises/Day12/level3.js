// Write a function which cleans text. 
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanedText =(sentence) =>{
    const cleanSentence = sentence.replace(/[%$@&#,.!?;]/g, "")
    return cleanSentence
}
console.log(cleanedText(sentence))

//Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
function mostFrequentWords(cleanedText, num){
    words = cleanedText.split(/\s/)
    const wordCount = {}
    words.forEach(element => {
        if(wordCount[element]){
            wordCount[element]++
        }
        else
        wordCount[element] = 1
    })
    const result = Object.keys(wordCount).map(element => ({ word:element, count: wordCount[element]}));
    result.sort((a,b) => b.count - a.count)
    for(let i = 0; i < num; i++){
        console.log(result[i])
    }
}
console.log(mostFrequentWords(cleanedText(sentence), 10))
