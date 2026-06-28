/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased. */

function camelize(str){
return str
        .split('-')
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item
        .slice(1))
        .join('');
}