/* Small enough? - Beginner
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/ 
/* 
P: array , limit ; both integers 
R: true or false ; if all val in array are equal or lower to limit 
E: [66, 101], 200 => true 
   [78, 117, 110, 99, 104, 117, 107, 115], 100 => false 
P: loop through array, check if array <=limit 
*/ 

function smallEnough(a, limit){
    let counter = 0; 
    a.forEach(x => { if(x>limit){ counter ++}})

    return counter === 0 ? true : false 
}

console.log(smallEnough([66, 101], 200))   // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))   // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))   // true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))   // true
