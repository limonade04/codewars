/* Round up to the next multiple of 5
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/ 

/* 
P: n = integer  
R: integer (multiple of 5 - closest to input n) 
E: input:    output:
    0    ->   0
    2    ->   5
    3    ->   5
    12   ->   15
    21   ->   25
    30   ->   30
    -2   ->   0
    -5   ->   -5

P:  
    conditional to see if close to multiple of 5 
*/ 
function roundToNext5(n){
    return Math.ceil(n/5)*5
}

