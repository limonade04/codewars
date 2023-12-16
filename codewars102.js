/*  Two Sets of Equal Sum  -- 6kyu
Task
If possible, divide the integers 1,2,…,n into two sets of equal sum.

Input
A positive integer n <= 1,000,000.

Output
If it's not possible, return [ ] (Javascript and Python) or ( ) (Python) or [[],[] ] (Java, C#) or None (Scala). If it's possible, return two disjoint sets. Each integer from 1 to n must be in one of them. The integers in the first set must sum up to the same value as the integers in the second set. The sets can be returned in a tuple, list, or array, depending on language.

Examples:
For n = 8, valid answers include:

[1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7]])

[8, 1, 3, 2, 4], [5, 7, 6]

[7, 8, 3], [6, 1, 5, 4, 2], and others.

For n = 9 it is not possible. For example, try [6, 8, 9] and [1, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22. No other sets work either.
*/ 

/* 
Given an integer n (positive int, <=1000000)
divide the numbers into two arrays with equal sum 
n = 8 ; 1,2,3,4,5,6,7,8 
[1,3,6,8], [2,4,5,7]  ==> 18 
[8,1,3,2,4], [5,7,6]  ==> 18 
[7,8,3], [6,1,5,4,2]  ==> 18 

arr1 = [] 
arr2 = []
for loop and find the total sum of i and divide it by two to see if it's divisible by %2===0 
find the sum of numbers that'll equal the sum and start to push into arr1 and arr2 
return arr1 and arr2 
*/ 

function createTwoSetsOfEqualSum(n) {
    // If the sum of all numbers from 1 to n are odd, return an empty array.
    if ((n * (n+1) / 2) % 2 !== 0) return []
    
    // Initializing the result arrays
    let arrs = [[], []];
    
    // Tracking the sum of each array
    let sum1 = 0;
    let sum2 = 0;
  
    // Iterating the loop in reverse to start with the largest values
    for (let i = n; i > 0; i--) {
      // If sum1 is less than or equal to sum2
      if (sum1 <= sum2) {
        // Push the value to arr1
        arrs[0].push(i);
        // and increment the value of sum1
        sum1 += i;
      } else {
        // Push the value to arr2
        arrs[1].push(i);
        // and increment the value of sum2
        sum2 += i;
      }
    }
    // or return the array if the values are equal
    return arrs;
}

// function createTwoSetsOfEqualSum(n) {
// 	let sum = (n * (n + 1)) / 2;
// 	if (sum % 2 !== 0) return [];
// 	let total = sum / 2;

// 	let arrs = [[], []];

// 	for (let i = n; i >= 1; i--) {
// 		if (total - i >= 0) {
// 			total -= i;
// 			arrs[0].push(i);
// 		} else {
// 			arrs[1].push(i);
// 		}
// 	}

// 	return arrs;
// }