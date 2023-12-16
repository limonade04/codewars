/* Fix string case -- 7kyu 
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
/*
given string - take shortest path to be all lower or upper.
if even split - all caps 

test how many letters are upper and how many lower 
if majority upper then all upper 
else  all lower 

*/ 

function solve(s){
    let upperLetters = 0
    let lowerLetters = 0

    for(let i=0; i<s.length; i++){
        s[i]===s[i].toUpperCase() ? upperLetters++ : lowerLetters++
    } 
    
    return upperLetters > lowerLetters ? s.toUpperCase() : s.toLowerCase() 
} 

console.log(solve("code"))  // "code"
console.log(solve("CODe"))  // "CODE"
console.log(solve("COde"))  // "code"
console.log(solve("Code"))  // "code"