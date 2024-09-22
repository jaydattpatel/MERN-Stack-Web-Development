/*
author : Jaydatt Patel

JavaScript Object Notation (JSON):

The modern web consists of millions and millions of web pages, connected services and databases.

For example, if the stringified JSON data was converted to an object that had the following structure:

const ObjectOfJSON = {
                        USD: 'str',
                        GBP: [],
                        EUR: {}
                    }

const ArrayOfJSON = [
                        { USD: 'str' },
                        { GBP: [] },
                        { EUR: {} }
                     ]


JSON is just a string - but there are rules that it must follow :
- JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.
- If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.
- JSON can work with some primitives and some complex data types, as described below.
- Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

- primitive values: strings, numbers, bolleans, null
- complex values: objects and arrays (no functions!)
- Objects have double-quoted strings for all keys
- Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

String properties must be surrounded in double quotes. For example:
"fruits", "vegetables"

Number properties are represented using the regular JavaScript number syntax; e.g
5, 10, 1.2

Boolean properties are represented using the regular JavaScript boolean syntax, that is:
true, false

Null as a property is the same as in regular JavaScript; it's just a null

*/

const obj = {
  name: "Rahul",
  sub: ["eng", "math"],
  info: {
    email: "abc@xyz.com",
    contact: "+12345",
  },
};

// JSON.stringify(obj) to make object to JSON string format
const Jstr = JSON.stringify(obj);
console.log("JSON String format : ", Jstr);

//JSON.parse(Jstr) to conert JSON string into object.
const obj2 = JSON.parse(Jstr);
console.log("Object : ", obj2);
