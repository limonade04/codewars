// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // empty arrays return 0 
    if(array.length === 0){
        return 0
    }
    // calculate the average of the numbers in a given list 
    return array.reduce((a,c)=>a+c)/array.length
}

console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))