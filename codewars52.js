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
    return string.split('').forEach(word => word.length>= 5 ? word.reverse() : word )
}