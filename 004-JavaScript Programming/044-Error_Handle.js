/*
 * Author : Jaydatt Patel
error handling: 
try{ 

} catch(){ 

}catch(){

}......{

}finally{

}

Here are some of the most common errors in JavaScript: 
- ReferenceError 
- SyntaxError : syntax error can not work with try and catch block
- TypeError 
- RangeError

There are some other errors in JavaScript. These other errors include: 
- AggregateError 
- Error 
- InternalError 
- URIError 
 */

console.log("\n----------Reference Error");
try {
  console.log(username);
} catch (error) {
  console.log("ReferenceError: username is not defined");
}

try {
  xyzFunction();
} catch (error) {
  console.log("ReferenceError: xyzFunction() is not defined");
}

console.log("\n----------Syntax Error");
console.log(
  "Syntax error must ne solved before run program",
  "This problem can not be resolved using try and catch block"
);

console.log("\n----------Type Error");
try {
  "hello".get();
} catch (error) {
  console.log('TypeError:"hello".get is not a function');
}

console.log("\n----------Range Error");
try {
  console.log((10).toString(2)); // '1010'
  console.log((10).toString(50)); //  error, rnage for tostring(2 to 36)
} catch (error) {
  console.log(
    "RangeError: toString() radix argument must be between 2 and 36 at Number.toString "
  );
}
