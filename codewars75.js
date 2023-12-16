/* Loading Anagram Detection 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/ 

/* 
P: test = letters - letters; original - letters
R: true or false ; case non-sensitive 
E: "foefet"; "toffee"  => true 
   "Buckethead" ; "DeathCubeK" => true 
P: create two sorted lists from the words. 
    - test.split("").sort().map(x=>x) 
    - original.split("").sort().map(x=>x)
    - testArr === originalArr ? true : false 
*/ 

const isAnagram = (test,original) => {

    const sortStr = (str) => str.toLowerCase().split("").sort().join("")

    return sortStr(original) === sortStr(test)
}

console.log(isAnagram("foefet", "toffee")) //  true
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true 
console.log(isAnagram("dumble", "bumble")) // false 
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false