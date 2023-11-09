/* Beginner Series #4 Cockroach - 8kyu 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/ 

/*  
P: integer >= 0; km/hr --> cm/sec 
R: whole# floored, cm/sec 
E: 1.08 --> 30 
P: 
 Math.floor(km/hr*27.777778)
 centimeters per second = kilometers per hour × 27.777778
 km/hr ==> cm / sec 
 1 km ==> 100000 cm 
 1 hr ==> 3600 sec 

*/ 

function cockroachSpeed(s) {
    return Math.floor(s*27.777778)
}

// Math.floor(s*100000/3600)