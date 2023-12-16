/* Exclamation marks series #1: Remove an exclamation mark from the end of string -- 8 kyu
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/ 

/* 
P: string - remove ! from end (if there)
R: string with final ! removed 
E: "Hi!" --> "Hi" 
  "Hi" --> "Hi"
P: for loop string  
   if ( string ends ! ) 
      strip ! from string 
   else (return string)
*/

function remove (string) {
    return (string[string.length-1]==="!") ? string.slice(0,-1) : string 
}