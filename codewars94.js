/* Enumerable Magic #25 - Take the First N Elements -- 8 kyu 
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/ 

function take(arr, n) {
    let newArray = []
    if (arr.length == 0){ 
        return newArray 
    } else if (arr.length < n){
        for(let i=0; i<arr.length;i++){
            newArray.push(arr[i])
        }
        return newArray
    } else {
      for(let i=0; i<n;i++){
        newArray.push(arr[i])
      }
      return newArray  
    } 
}


// function take(arr, n) {
//     return arr.slice(0, n);
// }

console.log(take([10,-18,-17,-10,-27,24,13,58,-22,-21,29,87,-17,-23,44,-75,28,-31,28,68,-15,-71,24,60,62,-54,17,0,47,-40,-52,-15,-13,-67,68,-48,-36,-34,-6,-51,26,16,1,11,1,-75,-6,36,-26,84,5,-22,-16,-8,24,4,-54,42,25,40,39,-33,-8,46,-63,32,8,19,-18,75,-80,4,4,13,-51,9,64,-14,-47,-22,20,-29,-1,-27,-34,6,53,56,-55,-38,44,21,-1,-70,-5,0,66], 69))
console.log(take([27,56,-36,-68,30,7,-13,-18,-13,89,81,17,-41,47,49,70,-56,-84,-1,-15,33,5,3,38,-71,16,25,61,-23,-74,-37,35,86,4,-2,43,27,32,58,16,30,-21,36,-37,47,46,-12,41,-39,62,-21,-28,19,-25,-42,26,-7,11,-66],39))
console.log(take([-77,-3,-8,-89,-3,6,-25,33,-7,-4,-44,-73,22,-34,-30,-21,45,-23,-18,-51,-3,29,65,0,13,-3,-77,72,3,18,4,62,-37,16,10,16,24,-73,36,45,54,-2,43,-7,24,-54,-82,-53,-1,30,-32,69,5,57,-45,58,-71], 7))
console.log(take([-17,-18,8,-50,-14,-16,-73,52,-33,20,5,82,32,-45,19,26,-45,46,-3,-64,36,15,-45,-5,-36,-7,-34,-58,11,51,12,-26,-15,0,-37,19,0,10,26,55,27,11,44,-33,-30,64,1,47,20,61,13,7,26,-5,34,-90,-21,-4,27,-64,31,-5,0,33,60,-29,4,-43,94,24,23,33],80))