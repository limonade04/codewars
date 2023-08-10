/* 
Find the capitals

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/ 

const capitals = word => {
    let list = []
    for(let i=0; i<word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            list.push(word[i].indexOf())
        }
    }
    return list
}












// var capitals = function (word) {
// 	// Write your code here
// };