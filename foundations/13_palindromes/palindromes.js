const palindromes = function (str) {
    const reverseStr = str.split("").reverse().join('').toLowerCase().replace(/[^a-z0-9]/g, "");
    const strChecker = str => reverseStr === str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return strChecker(str);
    // return str;
};

// Do not edit below this line
module.exports = palindromes;
