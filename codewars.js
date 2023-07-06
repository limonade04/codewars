
/*****************************************************************
 * SquareSum - square the numbers in the array then sum them together 
 * 
*****************************************************************/
const squareSum = (numbers)=>{ console.log(numbers.reduce((sum,num)=> sum+(num**2),0))}

// function squareSum(numbers){
//     let sum=0
//     for(let i=0; i<numbers.length; i++){ 
//         const square = numbers[i]**2
//         sum+=square 
//     }
//     return sum
// }

// squareSum([1,3,4])

