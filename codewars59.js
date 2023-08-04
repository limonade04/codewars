/* 
Is the string uppercase?

Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/ 

/* 
P:  string - letters upper and lowercase 
R:  true if all caps or false if 1+ lowercase 
E: hello -> false 
    HELLO -> true 
    THIS IS A TEST -> true 
    THIS IS a TEST -> false 
P: string -> .toUpperCase() if it matches original true ; false 
*/ 

String.prototype.isUpperCase = function() {
  let upperStr = String.toUpperCase()
  return upperStr === String ? true : false 
}

// String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
