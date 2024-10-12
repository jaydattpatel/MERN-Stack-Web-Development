/*
 * Author : Jaydatt Patel
    Operators in JS
*/

// 1. Assignment Operator(=)
let a = 10;
let b = a;
let c = (a = 20);
console.log("a :", a);
console.log("b :", b);
console.log("c :", c);

console.log("-----------------------");
// 2. Arithematic Opeartors (+, -, *, /, %)
console.log("10 + 2 : ", 10 + 2);
console.log("10 - 2 : ", 10 - 2);
console.log("10 * 2 : ", 10 * 2);
console.log("10 / 2 : ", 10 / 2);
console.log("11 % 2 : ", 11 % 2);

console.log("-----------------------");
// 3. More Arithematic Operators (++, --, +, -, **)
let i;

i = 8;
console.log("++i :", ++i);
i = 8;
console.log("i++ :", i++);
i = 8;
console.log("--i :", --i);
i = 8;
console.log("i-- :", i--);

i = 3;
console.log("+i :", +i);
console.log("-i :", -i);
console.log("i ** 3 :", i ** 3);

console.log("-----------------------");
// 4. Augmented Assignment Opeartor (+=, -=,*=, /=, */.....)
i = 10;
i += 3;
console.log("i += 3 : ", i);
i = 10;
i -= 3;
console.log("i -= 3 : ", i);
i = 10;
i *= 3;
console.log("i *= 3 : ", i);
i = 10;
i /= 3;
console.log("i /= 3 : ", i);
i = 10;
i %= 3;
console.log("i %= 3 : ", i);

console.log("-----------------------");
// 4. Comparison Operator (==, !=, <, <=, >, >=, ===, !==)
console.log("5 == 6 : ", 5 == 6);
console.log("5 == 5 : ", 5 == 5);
console.log("5 != 5 : ", 5 != 5);
console.log("5 != 6 : ", 5 != 6);
console.log("5 <= 5 : ", 5 <= 5);

console.log("'5' === 5 :", "5" === 5); //compare with datatype and value
console.log("5 === 5 :", 5 === 5);
console.log("5 === 6 :", 5 === 6);
console.log("'6' !== 6 :", "6" !== 6);
console.log("6 !== 6 :", 6 !== 6);
console.log("6 !== 5 :", 6 !== 5);

console.log("-----------------------");
// 5. Logical Operators (&&, ||, !)

let grade = 65;
let scholarship = 80;
let eligile = grade > 60 && scholarship > 70;
console.log(eligile);

let m1 = 55;
let m2 = 55;
let m3 = 45;
let eligibility = m1 > 60 || m2 > 60 || m3 > 60;
console.log(eligibility);

let rightToVote = false;
console.log("!rightToVote : ", !rightToVote);

console.log("3 && 1 : ", 3 && 1);

// 6. Bitwise Operators (&, | , ^ , ~ , << , >> , >>>)
