/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.*/

function filterRange(arr, a, b){
    let filtered = [];

    let filterNumbers = arr.filter((num) => num >= a && num <= b);

    return filterNumbers;
}