/* Convert number to reversed array of digits 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/ 

/* 
P: number - non-negative 
R: the number in array form + in reverse 
E:  35231 => [1,3,2,5,3]
    0 => [0]
P:  n.toString().split('').reverse().map(x=>x)
*/ 

function digitize(n){
    return n.toString().split('').reverse().map(Number)
} 
