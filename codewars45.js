The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let charArr = {} 
    if (string.length===0){ return charArr}
    for(let letter of string){
        charArr[letter] ? charArr[letter ]++ : charArr[letter] = 1 
    }
    return charArr
}

// function count (string) {  
//     let count = {}
//     string.split('').forEach(s =>{ count[s] ? count[s]++ : count[s] = 1})
//     return count
// }
