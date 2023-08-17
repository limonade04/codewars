/* If you can't sleep, just count sheep!! 
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/ 

/*
P: num = integer - no negatives 
R: if 0 = '' else return number of sheep. 
E: 0 -> '' 
   3 -> '1 sheep... 2 sheep... 3 sheep...' 
P: for loop - 'x sheep ....'
*/ 

const countSheep = num => {
    let list = "" 
    if (num===0){
        return list
    }else {
        for(let i=1; i<=num; i++){
            list+=`${i} sheep...`
        }
        return list
    }
} 