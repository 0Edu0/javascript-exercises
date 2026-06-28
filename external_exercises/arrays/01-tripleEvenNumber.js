/* As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

Take in an array.
For every even number, it will triple it.
Then it will sum all those even numbers. */

let numbers = [1, 2, 3, 4, 5, 6];

function tripleEvenNumbers(){
    return numbers
           .filter((num) => num % 2 === 0)
           .map((num) => num * 3)
           .reduce((sum, current) => sum + current, 0);
}

console.log(tripleEvenNumbers());