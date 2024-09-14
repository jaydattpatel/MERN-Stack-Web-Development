/*
 * Author : Jaydatt Patel
switch conditional statement
*/
console.log("(100 == \"100\") : " + (100 == "100"));
console.log("(100 === \"100\") : " + (100 === "100"));//compare and check data type also same or not
console.log("(100 != \"100\") : " + (100 != "100"));
console.log("(100 !== \"100\") : " + (100 !== "100"));//compare and check data type also same or not



var light = "red";
switch(light) {
    case 'green':console.log("Drive");  break;
    case 'orange':console.log("Get ready"); break;
    case 'red':console.log("Don't drive");  break;
    default:console.log('The light is not green, orange, or red');  break;
 }


var weekNum = 3;
switch(weekNum){
    case 0 : console.log('Sun'); break;
    case 1 : console.log('Mon'); break;
    case 2 : console.log('Tue'); break;
    case 3 : console.log('Wed'); break;
    case 4 : console.log('Thus'); break;
    case 5 : console.log('Fri'); break;
    case 6 : console.log('Sat'); break;
    default : console.log('Invalid input');
} 