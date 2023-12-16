// Triangle of Multiples (Easy One)

// See the following triangle:
// ____________________________________
//  1                                      
//  2   4   2                              
//  3   6   9   6   3                      
//  4   8   12  16  12  8   4             
//  5   10  15  20  25  20  15  10  5   
//  ___________________________________
 
// The total sum of the numbers in the triangle, up to the 5th line included, is 225, part of it, 144, corresponds to the total sum of the even terms and 81 to the total sum of the odd terms.

// Create a function that may output an array with three results for each value of n.

// triang_mult(n)  ----> [total_sum, total_even_sum, total_odd_sum]
// Our example will be:

// triang_mult(5) ----> [225, 144, 81]
// Features of the random tests:

// number of tests = 100
// 49 < n < 5000


// P: num, whole, 
// R: return [sum, sum evens, sum odds] 
// E: n=5 ; total = 225 ; even = 144 ; odd = 81 
// 1 
// 2 4 2 
// 3 6 9 6 3 
// 4 8 12 16 12 8 4 
// 5 10 15 20 25 20 15 10 5 

// P: set total, even, odd 
// for loop 1 -> n 
// sum total 
// sum even if(x%2===0)
// sum odd if(x%2!==0)


function multTriangle(n) {
    let arr = []
    let total = 0 
    let evenTotal = 0 
    let oddTotal = 0 
    for (let i=1; i<=n; i++){
        for (let ind=1; ind<=i; ind++){
            arr.push(i*ind)
        }
        for ( let y=i; y>=2; y--){
            arr.push(y*i) 
        }
    }
    total = arr.reduce((cur,acc)=>cur+acc) 
    evenTotal = arr.filter(x=>x%2===0).reduce((cur,acc)=>cur+acc) 
    oddTotal = arr.filter(x=>x%2!==0).reduce((cur,acc)=>cur+acc)
    return [total, evenTotal, oddTotal]
}


// // Correct Answer 
// function multTriangle(n) {
//     let totalSum     = ((n*n + n)/2)**2;
//     let totalOddSum  = (Math.ceil(n/2))**4;
//     let totalEvenSum = totalSum - totalOddSum;
//     return [totalSum, totalEvenSum, totalOddSum];
// }