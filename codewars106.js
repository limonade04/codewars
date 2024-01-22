/* Reverse Words -- 7 kyu
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/ 

/*
str - string parameter 
return - string but in reverse AND all spaces in string should be retained. 

str.toArray().split()
*/


function reverseWords(str) {
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))  // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')) //  'elppa'
console.log(reverseWords('a b c d'))  //  'a b c d'
console.log(reverseWords('double  spaced  words'))  // 'elbuod  decaps  sdrow'


console.log('test')
console.log('hello mozzy!')