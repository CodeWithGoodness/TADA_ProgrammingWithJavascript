// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(paragraph, num){
    words = paragraph.split(/\s/)
    const wordCount = {}
    words.forEach((word) => {
        if (wordCount[word]){
            wordCount[word]++
        }
        else
        wordCount[word] = 1
    })
    
    const resultArray = Object.keys(wordCount).map(word => ({word: word,count: wordCount[word]}))
    resultArray.sort((a,b) => b.count - a.count)
    
    for(let i = 0; i < num; i++){
        console.log (resultArray[i])
    }
}
console.log(tenMostFrequentWords(paragraph, 10))


  