/*************************************************************
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81) 
 * Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
 * 
 * Note: The function accepts an integer and returns an integer.
 *************************************************************/
function squareDigits(num) {
  let strNum = num.toString();
  let concat = '';
  for (let i = 0; i < strNum.length; i++) {
    let square = Math.pow(parseInt(strNum[i]), 2);
    concat += square.toString();
  }
  return parseInt(concat);
}

// CodeWars Kata Answer
// function squareDigits(num){
//   return +num.toString().split('').map(i => i*i).join('');
// }

//Array Method 
// function squareDigits(num) {
//   const strNum = String(num);
//   const squaredDigits = Array.from(strNum, digit => parseInt(digit) ** 2);
//   const squaredStr = squaredDigits.join('');
//   return parseInt(squaredStr);
// }
console.log('Concatenate')
console.log(squareDigits(9119))
