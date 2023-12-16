// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// function nbDig(n, d) {
//     // square all numbers k between 0 and n 
//     let k = []
//     for (let i=0; i<=n; i++){
//         k.push(i**2)
//     }
//     let count = 0 
//     k.forEach((x,i)=>{
//         if (x.toString().includes(d.toString())){
//             count++
//         }
//     })
//     return count 
// }

function nbDig(n, d) {
    let count = 0;
    for (let k = 0; k <= n; k++) {
        let squared = k * k;
        let digits = squared.toString().split("");
        count += digits.filter((digit) => digit === d.toString()).length;
    }
    return count;
}

console.log(nbDig(10,1))
console.log(nbDig( 5750, 0))
console.log(nbDig(11011, 2))
console.log(nbDig(12224, 8))
console.log(nbDig(11549, 1))

function nbDig(n, d) {
    let count = 0;
    for (let k = 0; k <= n; k++) {
        let squared = k * k;
        let digits = squared.toString().split("");
        count += digits.filter((digit) => digit === d.toString()).length;
    }
    return count;
}