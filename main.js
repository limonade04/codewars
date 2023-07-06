/*********************************************** 
 * Reverse Strings 
 *  
************************************************/
// const solution = str =>{ 
//     let word = ''
//     for(let i = str.length-1; i>=0; i--){ 
//         word+=str[i]
//     }
//     return word 
// }

// OR 
const solution = str => str.split('').reverse().join('');
console.log(solution('hello'))
