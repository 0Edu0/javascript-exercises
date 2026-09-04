const fibonacci = function(n) {
    let first = 1;
    let second = 1;
    if(n == 0){
        return 0;
    } else if (n < 0) {
        return "OOPS";
    } else {
        for (let i = 1; i < n; i++){
            let sum = first + second; 
            second = first;
            first = sum; 
        };
        return second;
    };
};

// Do not edit below this line
module.exports = fibonacci;
