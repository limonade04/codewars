/* Mumbling -- 7 kyu
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/ 
/*
s.forEach(x,i)==>{
    x[i].toUpperCase()

}
*/


function accum(s) {
    let list = [];
    let letters = s.split('');
	for (let i=0; i<s.length; i++){
        list.push(letters[i].toUpperCase() + Array(i+1).join(letters[i].toLowerCase()))
    }
    return list.join('-')
}

// return s.split('').map((c,i)=> (c.toUpperCase()+c.toLowerCase().repeat(i))).join('-')