let number = 42;

// fib number with memo
let startFib = (Math.round(new Date().getTime()/1000));
let f = 1;
const fib = n => {
    let memo = {};
    if(memo.n) return memo.n;
    if(n <= 2) f = 1;
    else f = (fib(n-1) + fib(n-2));
    memo.n = f;
    return f;
}
console.log("--- fib ->",fib(number));
let endFib = (Math.round(new Date().getTime()/1000));
console.log('Execution time: ', (endFib - startFib))

// fib recursion
let startSlowFib = (Math.round(new Date().getTime()/1000));
const fibSlow = n => {
    if (n <= 2) return 1;
    else return (fibSlow(n-1)+fibSlow(n-2));
}
console.log("----- fibSlow ->", fibSlow(number));
let endSlowFib = (Math.round(new Date().getTime()/1000));
console.log('Execution time: ', (endSlowFib - startSlowFib))