// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);
let ages = users.map(user => user.age);
let userInfo = users.map(user => `${user.name} (${user.age})`);

alert( names ); // John, Pete, Mary
alert( ages );
alert( userInfo );