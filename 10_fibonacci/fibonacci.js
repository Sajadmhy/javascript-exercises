const fibonacci = function(n) {

    if (n>=0) {
        let fib = [0, 1];
        let data = [];
        
        for(let i = 2; i <= 30; i++) {
          fib[i] = fib[i - 1] + fib[i - 2]; 
          data.push(fib[i]);
        };
        return fib[n]}
        else {
            return 'OOPS';
        };
};



// Do not edit below this line
module.exports = fibonacci;
