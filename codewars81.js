/* Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/ 
/* 
P: str - name 
R: str -  lastname firstname 
E:  "john McClane" --> "McClane john"
P:  split(' ') 
return split[1] split[0]
*/ 

function nameShuffler(str){
    let split = str.split(" ")
    return `${split[1]} ${split[0]}`
  }

  console.log(nameShuffler('john McClane'))  // McClane john
  console.log(nameShuffler('Mary jeggins'))  // jeggins Mary
  console.log(nameShuffler('tom jerry'))  // jerry tom