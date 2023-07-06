
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let abbrev = []
    name.toUpperCase().split(' ').forEach(x => abbrev.push(x[0]))
    return `${abbrev[0]}.${abbrev[1]}`
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))
console.log(abbrevName("P Favuzzi"))
console.log(abbrevName("David Mendieta"))

// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }