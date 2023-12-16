/* Detect Pangram 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/ 

/* 
P: string - letters ; test if each letter a-z appears at least once and must return once. Ignore punctuactions &numbers 
R: true ; false 
E: "The quick brown fox jumps over the lazy dog."  -> true 
   "This is not a pangram."  -> false     
P: alph = {} 
string.split("").map( x => alph[x] ? ++ : alph[x] = 1  )
test values to see if ===1 ? true : false 
*/     

function isPangram(string){
    string = string.toLowerCase(); 
    return 'abcdefghijklmnopqrstuvwxyz'.split("").every( x => string.indexOf(x)!==-1);
}

