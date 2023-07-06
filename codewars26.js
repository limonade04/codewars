// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
 let letters = {} 
 for(let char of str.toLowerCase()){
    if(letters[char]){
        return false 
    }
    letters[char] = true 
 } 
 return true 
}

console.log( isIsogram("Dermatoglyphics"))
console.log( isIsogram("isogram"))
console.log( isIsogram("aba"))
console.log( isIsogram("moOse"))
console.log( isIsogram("isIsogram"))
console.log( isIsogram(""))