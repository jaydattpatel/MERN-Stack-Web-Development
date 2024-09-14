/*
 * Author : Jaydatt Patel
for loops : for, for(in), for(of)

for loop :  it is general for loop.

for(in) : In this loop, It will iterate as number in form string which can be used as subsript to get perticular index object.  

If for(in) loop is used with object of derived dictionary then it will iterate as directly keys of object and also it will iterate inherited prototypes (keys) of other object(base dictionary)).

for(of) : In this loop, It will iterate over direct object. 

If for(of) loop is used with object of derived dictionary then it will iterate as directly keys of object and but it will not iterate inherited prototypes (keys) of other object(base dictionary)).


*/

console.log("~~~~~~~General loop~~~~~~~");

console.log("----------for loop - 1:");
for(var i = 1; i <=3 ; i++)
    console.log(i);

console.log("----------for loop - 2:");
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) 
    console.log(cubes[i])

console.log("~~~~~~~Loop with Array~~~~~~~");

console.log("----------for loop - 3:");
var arr = [11,12,13,14,15];
for(var i in arr)
    console.log('typeof(i) :', typeof(i),' , ',i,':',arr[i] );

console.log("----------for loop - 4:");
var arr = [11,12,13,14,15];
for(var i of arr)
    console.log('typeof(i) :', typeof(i),' , ',i,':',arr[i] );
    
console.log("----------for loop - 5:");
const birds = ["Parrot", "Falcon", "Owl"];
for (const bird of birds) 
    console.log(bird);



console.log("~~~~~~~Loop with Dictionary~~~~~~~");
var car = {
    color : "red",
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("sportsCar : ",sportsCar);


//for(of) loop iterat properties keys with objects.
console.log("----------for loop - 5:");
for(const prop of (Object.keys(sportsCar)))
    console.log(prop, ':',sportsCar[prop]);

//for(in) loop iterat properties keys with objects and its hidden prototype.
console.log("----------for loop - 6:");
for(const prop in sportsCar)
    console.log(prop, ':',sportsCar[prop]);


//styling console output using CSS with a %c format specifier
/*
console.log("--------------:");
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
*/
