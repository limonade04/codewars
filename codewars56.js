/*  All Star Code Challenge #18
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/ 

/* 
P: str ; char (single character)
R: integer of count of char ; if no char or str return 0 
E: Hello 'o' -> 1 
   Hello, 'l' -> 2 
    ,'w' -> 0 
   Hello, 'r' -> 0 
P: loop - check the str for char ; counter of char 
    conditional - check if char in str; return counter 
*/

function strCount(str, letter){  
    let counter = 0 
    for(let i=0; i<str.length; i++){
        if(str[i]===letter){
            counter++
        } 
    }  
    return counter
}

// function strCount(str, letter){  
//     return str.split(letter).length-1
// }