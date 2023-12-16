/* Beginner Series #2 Clock 

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/ 

/* 
P: h = hours ; m = min ; s = sec  => integers 0+ 
R: time in milliseconds 
E: h=0,m=1,s=1
    1m = 60 seconds = 60000 milliseconds 
    1h = 60 min = 3,600,000 milliseconds 
P: 
*/ 

const past = (h,m,s) => {
    let milliseconds = 0
    return milliseconds += (h*3600000) + (m*60000) + (s*1000) 
} 