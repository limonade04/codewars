// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    return array.length === 0 ? "even" : (array.reduce((a,c)=>a+c,0) % 2 === 0) ? "even" : "odd" 
}


// Edge cases 
console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))
// Even
console.log(oddOrEven([0, 1, 5]))
console.log(oddOrEven([0, 1, 3]))
console.log(oddOrEven([1023, 1, 2]))
// Negative Even 
console.log(oddOrEven([0, -1, -5]))
console.log(oddOrEven([0, -1, -3]))
console.log(oddOrEven([-1023, 1, -2]))
// Odd   
console.log(oddOrEven([0, 1, 2]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([1023, 1, 3]))
// Negative Odd 
console.log(oddOrEven([0, -1, 2]))
console.log(oddOrEven([0, 1, -4]))
console.log(oddOrEven([-1023, -1, 3]))