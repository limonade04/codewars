/* Find the odd int
DESCRIPTION:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/ 

/* 
parameter: array of integers 
return the integer that shows odd # times 
[7] => 7 
[1,1,2] => 2 
[0,1,0,1,0] => 0 
[1,2,2,3,3,3,4,3,3,3,2,2,1] => 4 

counter list [] 
array loop - forEach() 
    conditional to see if the integer is already inside the list; yes= add 1; no= set it up 
return counter list 

*/ 

function findOdd(A) {
    let count = {}
    A.forEach((x) => {
        count[x] ? count[x]++ : count[x] = 1;

    })
    
    for(prop in count){
        if(count[prop]%2 !== 0){
            return Number(prop)
        }
    } 
}
