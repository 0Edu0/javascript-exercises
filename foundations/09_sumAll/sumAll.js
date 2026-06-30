const sumAll = function(first, second) {
    let result = [];

    if(!Number.isInteger(first) || !Number.isInteger(second)) return 'ERROR';

    if(first < 0 || second < 0) return 'ERROR';

    if(second > first){
        result.push(second);

        while(second != first){
            second -= 1;
            result.push(second);
        }
    } else if(second < first){
        result.push(first);

        while(first != second){
            first -= 1;
            result.push(first);
        }
    } 

    return result.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
