// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// P: array [num]  - all equal except 1 ; contains >=3 nums -> +++++++
// R: one unique num 
// E: [2,2,2,2,3,2] ->  return 3 
//    findUniq([ 1, 0, 0 ])   // 1
//    findUniq([ 0, 1, 0 ])   // 1
//    findUniq([ 0, 0, 1 ])   // 1
//    findUniq([ 1, 1, 1, 2, 1, 1 ])   // 2
//    findUniq([ 1, 1, 2, 1, 1 ])   // 2
//    findUniq([ 3, 10, 3, 3, 3 ])   // 10
// P: let count 
//    arr.forEach (num => count[num] || 0) + 1 
//    arrary.for(i=1)  ->  loop 
//    conditional current val === next Val -> move along ; current val!==nextVal -> return value 


function findUniq(arr) {
    // Creating an array that counts all of the nums in the original arr 
    let counts = {};
    arr.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
    });
    // Looping through all of the nums and checking if their count =1 if so that's the unique value 
    for (let num of arr) {
      if (counts[num] === 1) {
        return num;
      }
    }
}

// OR 
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
// }

findUniq([ 1, 0, 0 ])   // 1
findUniq([ 0, 1, 0 ])   // 1
findUniq([ 0, 0, 1 ])   // 1
findUniq([ 1, 1, 1, 2, 1, 1 ])   // 2
findUniq([ 1, 1, 2, 1, 1 ])   // 2
findUniq([ 3, 10, 3, 3, 3 ])   // 10