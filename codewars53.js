/* Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8  
*/ 

/* 
triangle of consecutive odd nums. nth row given. Index starts @ 1. 
sum of the nums at row n 
1 - >  1   n=1
3,5 - > 8   n=2 
7,9,11 -> 27    n=3 
13,15,17,19 -> 64     n=4 
21,23,25,27,29 -> 125    n=5 

n**3 

*/ 

function rowSumOddNumbers(n) {
    return n**3
}