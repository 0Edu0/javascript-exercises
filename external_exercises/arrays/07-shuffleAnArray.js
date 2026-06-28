/* Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. 

All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case. */
let arr = [1, 2, 3];

function shuffle(arr){
    return arr.sort(() => Math.random() - .3);
}

console.log(shuffle(arr));