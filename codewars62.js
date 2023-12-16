/* 
Find the capitals

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/ 

/* 
P: word = string of upper and lowercase letters 
R: index of uppercase letters 
E: codeWaRs -> [4,6]
P: split - word.split('')
    loop - .forEach((x,i)=>{})
    if - if x === x.toUpperCase() 
    push i to list 
    return list 
*/

const capitals = word => {
    let list = []
    word.split('').forEach((x,i)=>{
        if(x === x.toUpperCase()){
            list.push(i)
        }
    })
    return list
}

console.log(capitals('CodEWaRs'))
