/* Vowel remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/ 

/* 
P: string - letters upper and lower 
R: string without lowercase vowels 'a,e,i,o,u' 
E: 'hello' -> 'hll'
    'codewars' -> 'cdwrs' 
    'HELLO' -> 'HELLO' 
P: conditional - check for 'aeiou' 
    switch(string.split(''))
    case 'a'
*/ 

const shortcut = string => {
    let word = []
    string.split('').forEach((x,i)=>{
        if(x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u'){
            word+=x
        }
    })
    return word
}