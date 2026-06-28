let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
function compare(a, b){
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

arr.sort(compare);

console.log( arr ); // 8, 5, 2, 1, -10