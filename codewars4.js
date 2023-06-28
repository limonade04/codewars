/*****************************************************************
 * Given an array of integers your solution should find the smallest integer.
 * For example:
 * Given [34, 15, 88, 2] your solution will return 2
 * Given [34, -345, -1, 100] your solution will return -345
 * You can assume, for the purpose of this kata, that the supplied array will not be empty.
*****************************************************************/
let showAnswer = document.getElementById(result) 

class SmallestIntegerFinder {
    findSmallestInt(args) {
     let current = args[0] 
     for(let i=1; i<args.length; i++){ 
        let test = args[i]
      if (current > test ){ 
        current = test
      }
     }
     return current
    }
}

let test1 = [78,56,232,12,8]
let test2 = [34, 15, 88, 2]
let test3 = [34, -345, -1, 100]

const answer1 = new SmallestIntegerFinder()
const answer2 = new SmallestIntegerFinder()
const answer3 = new SmallestIntegerFinder()
const ans1 = answer1.findSmallestInt(test1)
const ans2 = answer2.findSmallestInt(test2) 
const ans3 = answer3.findSmallestInt(test3) 

    
// console.log(ans1)
// console.log(ans2)
// console.log(ans3)
    
    
