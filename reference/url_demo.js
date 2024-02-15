const url = require("url");

const myUrl = new URL(
  "https://www.mywebsite.com:5000/test/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.toJSON());

// Host (root domain)
console.log(myUrl.host);

// Host name (without port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Append param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Serialized Query again
console.log(myUrl.search);

// Loop through params
myUrl.searchParams.forEach((name, value) => console.log(`${name}: ${value}`));
