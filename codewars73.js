/* Summing a number's digits
DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

*/ 

/* 
P: number => integer, positive or negative, but looking at integers only
R: sum of the integers 
E:  10 --> 1
    99 --> 18
    -32 --> 5
P:  
create a var: counter to sum all digits 
loop - to loop through number and add it to a sum counter
*/ 

function sumDigits(number) {
    return Math.abs(number).toString().split("").map(Number).reduce((acc,cum)=>acc+cum,0)
}


console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))