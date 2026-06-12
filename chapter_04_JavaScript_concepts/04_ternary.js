let a = 50;
let b = 30;
let c = 20;

let max = (a > b)
    ? (a > c ? a : c)
    : (b > c ? b : c);

console.log("Maximum number is:", max);