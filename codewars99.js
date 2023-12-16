/* Mexican Wave -- 6kyu 
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy!
*/

/*
given str -> return mexican wave of word 

array for mexicanwave 
loop str to uppercase one letter at a time, returning the word with upper letter 

*/

function wave(str){
    let mexicanWave = [] 
    
    for(let i=0; i<str.length; i++){
        let letter = str[i]
        if (letter ===" "){
            continue; 
        } else {
            mexicanWave.push(str.slice(0,i)+letter.toUpperCase()+str.slice(i+1,str.length))
        }
    }
    return mexicanWave
}

console.log(wave("hello"))
console.log(wave("you are the one"))


function wave(str){
    let mexicanWave = [] 
    
    for(let i=0; i<str.length; i++){
        let letter = str[i]
        if (letter ===" "){
            continue; 
        } else {
            mexicanWave.push(str.slice(0,i)+letter.toUpperCase()+str.slice(i+1,str.length))
        }
    }
    return mexicanWave
}