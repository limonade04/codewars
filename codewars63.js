/* 
Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/ 


/*
P: url - string with letters, symbols, nums 
R: URL - with anything before the # removed. 
E: "www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
P: url.split('#')
   url[0] 
*/ 

const removeUrlAnchor = (url) => {
    let splitWord = url.split('#')
    return splitWord[0]
}

// const removeUrlAnchor = url => url.split('#')[0]