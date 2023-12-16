/* Cat years, Dog years -- 8 kyu 
Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/ 

function humanYears(age) {
    let cat = 0 
    let dog = 0 
    if( age === 1 ){
        cat = 15 
        dog = 15 
    } else if (age === 2 ){
        cat = 24 
        dog = 24 
    } else {
        cat = 24 + 4 * (age-2)
        dog = 24 + 5 * (age-2)
    } 
    let arrYears = [age, cat, dog]
    return arrYears
}

console.log(humanYears(1))  // 1, 15, 15 
console.log(humanYears(2))  // 2, 24, 24 
console.log(humanYears(10))  // 10, 56, 64 


// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }