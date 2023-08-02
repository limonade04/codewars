/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/ 

/* 
P: str of word(s) 
R: return same str with word reversed if letters >= 5 then reverse word 
E: "Hey fellow warriors"  ->  "Hey wollef sroirraw" 
   "This is a test"  ->  "This is a test" 
P:  loop (str)
    conditional ( word >= 5 letters ) ;  reverse word ; word 
*/ 

function spinWords(string){
    if(!string.includes(' ')){
        for(let i=0; i<string.length; i++){
            return (string.length>=5) ? string.split('').reverse().join('') : string 
        }
    } else {
        let words = string.split(' ');
        let reversedWords = words.map((word) => (word.length >= 5 ? word.split('').reverse().join('') : word));
        return reversedWords.join(' ');
    }
}



console.log(spinWords("Welcome"))  // "emocleW" 
console.log(spinWords("Hey fellow warriors"))  //  "Hey wollef sroirraw"
console.log(spinWords("This is a test"))  // "This is a test"
console.log(spinWords("This is another test"))  // "This is rehtona test"
console.log(spinWords("You are almost to the last test"))  // "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more"))  //  "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one"))  //  "ylsuoireS this is the ast one"

/*
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
*/