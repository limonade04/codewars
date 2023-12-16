// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.


function saleHotdogs(n){
    // if (n<5){
    //     return n*100
    // }else if (n>=5 && n<10){
    //     return n*95
    // }else if (n>=10){
    //     return n*90
    // }
    return n<5 ? n*100 : n>=5 && n<10 ? n*95 : n>=10 ? n*90 : null
}

console.log(saleHotdogs(  1))
console.log(saleHotdogs(  4))
console.log(saleHotdogs(  5))
console.log(saleHotdogs(  9))
console.log(saleHotdogs( 10))
console.log(saleHotdogs(100))

// return n*(n<5?100:n<10?95:90);
