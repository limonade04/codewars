// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    const consonants = {const:['a','e','i','o','u']}
  let count = 0 
  if(str.length===0){return 0}
  for(let i=0; i<str.length; i++){
    str[i].charAt(!consonants) ? count++ : count+=0
  }
  return count  
}