/*
author : Jaydatt Patel

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

Date : Built In Objects
Date.now() : For Present date and Time

Year : getFullYear()	setFullYear()
Month :	getMonth()	setMonth()
Date : (of month)	getDate()	setDate()
Hours : getHours()	setHours()
Minutes	: getMinutes()	setMinutes()
Seconds : getSeconds()	setSeconds()
Milliseconds : getMilliseconds()	setMilliseconds()	
Day : getDay()

*/

console.log(Date.now());

const today = new Date();
console.log("today:", today);

const birthDate = new Date("1999-06-12");
console.log("birthDate:", birthDate);

const someDay = new Date(1990, 7);
console.log("someDay:", someDay);

console.log(birthDate.getFullYear());
console.log(birthDate.toDateString());
console.log(birthDate.toTimeString());
console.log(birthDate.toString);
