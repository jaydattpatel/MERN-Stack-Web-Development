/*
Author : Jaydatt Patel
Type Conversion
*/

// convert to String

// method-1 with String()
console.log("---------String()--------");
console.log("String(100) : ", String(100));
console.log("String(123.45) : ", String(123.45));
console.log("String(true) : ", String(true));
console.log("String(false) : ", String(false));
console.log("String(null) : ", String(null));
console.log("String(undefined) : ", String(undefined));
console.log("String(NaN) : ", String(NaN));

//method-2 obj.toString()
console.log("---------obj.toString()--------");
console.log("(100).toString() : ", (100).toString());
console.log("(123.45).toString() : ", (123.45).toString());
console.log("(true).toString() : ", true.toString());
console.log("(false).toString() : ", false.toString());

// Convert to Number
console.log("---------Number()--------");
console.log("Number('100') : ", Number("100"));
console.log("Number('123.45') : ", Number("123.45"));
console.log("Number(true) : ", Number(true));
console.log("Number(false) : ", Number(false));
console.log("Number('123ABC') : ", Number("123ABC"));

//convert to Numbert using Unary operator +
console.log("+'100' : ", +"100");
console.log("+'123.45' : ", +"123.45");

//convert to parseInt() : used to get interger value from string and string must start with integer or float
console.log("---------parseInt()--------");
console.log("parseInt('100ABC') : ", parseInt("100ABC"));
console.log("parseInt('123.45ABC') : ", parseInt("123.45ABC"));
console.log("parseInt('ABC100') : ", parseInt("ABC100"));

//convert to parseFloat() : used to get interger value from string and string must start with float or integer
console.log("---------parseFloat()--------");
console.log("parseFloat('100ABC') : ", parseFloat("100ABC"));
console.log("parseFloat('123.45ABC') : ", parseFloat("123.45ABC"));
console.log("parseFloat('ABC100') : ", parseFloat("ABC100"));

//convert to boolean
console.log("---------Boolean()--------");
console.log("Boolean('') : ", Boolean(""));
console.log("JSON.parse('true') : ", JSON.parse("true"));
console.log("JSON.parse('false') : ", JSON.parse("false"));
console.log("Boolean('true') : ", Boolean("true"));
console.log("Boolean('false') : ", Boolean("false"));
console.log("Boolean('xyz') : ", Boolean("xyz"));
console.log("Boolean(0) : ", Boolean(0));
console.log("Boolean(1) : ", Boolean(1));
console.log("Boolean(-5) : ", Boolean(-5));
console.log("Boolean(5) : ", Boolean(5));
console.log("Boolean(null) : ", Boolean(null));
console.log("Boolean(undefined) : ", Boolean(undefined));
console.log("Boolean(NaN) : ", Boolean(NaN));
