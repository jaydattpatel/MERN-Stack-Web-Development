// this is smaple program and to check memory or status or behaviour in source section in web developer tool in browser.
var userName = 'Tom';
var userAge = 10;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

function greetUser(name) {
  console.log(`*****************************`);
  var greet = 'I hope you are doing fine.';
  console.log(`hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = birthYear(currentYear, userAge);
  console.log(`*****************************`);
  return `Your birth year is ${year}`;
}

function birthYear(year, age) {
  console.log('Calculating the birth year');
  return year - age;
}

var bYear = greetUser(userName);
console.log(bYear);

