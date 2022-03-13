const sumAll = function(n1,n2) {
    let sum = 0;
    if (n1<0 || n2<0 || isNaN(n1) || isNaN(n2)) {
        return 'ERROR';
    }  else if ((typeof n1 != "number") || (typeof n2 != "number")) {
        return 'ERROR';
    }  else if (n2>n1) {
        for (i=n1; i<=n2; i++) {
        sum += i;
    }} else if (n1>n2) {
        for (i=n2; i<=n1; i++){
            sum += i;
        }};
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
